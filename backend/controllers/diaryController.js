const Diary = require("../models/Diary");
const bcrypt = require("bcrypt");

// Check if the diary exists and belongs to the user
async function checkDiaryExists(id, userId) {
  const diary = await Diary.findOne({ _id: id, user: userId });
  if (!diary) throw new Error("Diary Not Found");
  return diary;
}

// Transform the diary object to hide the content and images if the diary is locked
function transformLockedDiary(diary) {
  if (Array.isArray(diary)) {
    return diary.map((diary) => {
      if (diary.locked) {
        return {
          ...diary.toObject(),
          content: "Diary is locked",
          images: [],
          locked: true,
          password: null,
        };
      }
      return diary.toObject();
    });
  } else {
    if (diary.locked) {
      return {
        ...diary.toObject(),
        content: "Diary is locked",
        images: [],
        locked: true,
        password: null,
      };
    }
    return diary.toObject();
  }
}

// Diary Controller
const diaryController = {
  // Get all diaries or a specific diary
  async getDiaries(req, res, next) {
    try {
      let diaries;
      // Check if the diary id is provided
      if (req.params.id) {
        diaries = await checkDiaryExists(req.params.id, req.user._id);
      } else {
        diaries = await Diary.find({ user: req.user._id });
        if (!diaries) throw new Error("Diary Not Found");
      }
      diaries = transformLockedDiary(diaries);
      return res.status(200).json(diaries);
    } catch (error) {
      next(error);
    }
  },
  // Create a new diary
  async createDiary(req, res, next) {
    try {
      const { title, content } = req.body;
      if (!title || !content) {
        throw new Error("All fields are required");
      }
      const images = req.files ? req.files.map((file) => "/" + file.path) : [];
      const diary = new Diary({ title, content, images, user: req.user._id });
      await diary.save();
      console.log("success create diary", diary);
      return res
        .status(201)
        .json({ message: "Diary created successfully", diary });
    } catch (error) {
      next(error);
    }
  },
  // Update a diary
  async updateDiary(req, res, next) {
    try {
      const { title, content, imagesToRemove } = req.body;
      if (!title || !content) {
        throw new Error("All fields are required");
      }
      const diary = await checkDiaryExists(req.params.id, req.user._id);
      if (diary.locked) {
        throw new Error("Diary is locked");
      }
      diary.title = title;
      diary.content = content;
      if (imagesToRemove) {
        diary.images = diary.images.filter(
          (image) => !imagesToRemove.includes(image)
        );
      }

      if (req.files) {
        const newImages = req.files.map((file) => "/" + file.path);
        diary.images.push(...newImages);
      }

      await diary.save();
      console.log("success update diary", diary);
      return res
        .status(200)
        .json({ message: "Diary updated successfully", diary });
    } catch (error) {
      next(error);
    }
  },
  // Delete a diary
  async deleteDiary(req, res, next) {
    try {
      const diary = await checkDiaryExists(req.params.id, req.user._id);
      await diary.deleteOne();
      console.log("success delete diary", diary);
      return res.status(200).json({ message: "Diary deleted successfully" });
    } catch (error) {
      next(error);
    }
  },
  // Lock a diary
  async lockDiary(req, res, next) {
    try {
      const diary = await checkDiaryExists(req.params.id, req.user._id);
      // Hash the password
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      if (!diary.locked) {
        diary.locked = true;
        diary.password = hashedPassword; // Store the password in the diary document
      } else {
        throw new Error("Diary is already locked");
      }
      await diary.save();
      console.log("success lock diary", diary);
      return res.status(200).json({ message: "Diary locked successfully" });
    } catch (error) {
      next(error);
    }
  },
  // Unlock a diary
  async unlockDiary(req, res, next) {
    try {
      const diary = await checkDiaryExists(req.params.id, req.user._id);

      if (!diary.locked) {
        throw new Error("Diary is not locked");
      }
      const isMatch = await bcrypt.compare(req.body.password, diary.password);
      if (!isMatch) {
        throw new Error("Unauthorized");
      }
      diary.locked = false;
      diary.password = null; // Remove the password from the diary document
      await diary.save();
      console.log("success unlock diary", diary);
      return res.status(200).json({ message: "Diary unlocked successfully" });
    } catch (error) {
      next(error);
    }
  },
};
module.exports = diaryController;
