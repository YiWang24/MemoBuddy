const Diary = require("../models/Diary");
const bcrypt = require("bcrypt");
const diaryController = {
  async checkDiaryExists(id, userId) {
    const diary = await Diary.findOne({ _id: id, user: userId });
    if (!diary) throw new Error("Diary not found");
    return diary;
  },

  async getDiaries(req, res, next) {
    try {
      let diaries;
      if (req.params.id) {
        diaries = await this.checkDiaryExists(req.params.id, req.user._id);
      } else {
        diaries = await Diary.find({ user: req.user._id });
      }
      return res.status(200).json(diaries);
    } catch (error) {
      next(error);
    }
  },

  async createDiary(req, res) {
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

  async updateDiary(req, res) {
    try {
      const { title, content, imagesToRemove } = req.body;
      if (!title || !content) {
        throw new Error("All fields are required");
      }
      const diary = await this.checkDiaryExists(req.params.id, req.user._id);
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

  async deleteDiary(req, res) {
    try {
      const diary = await Diary.findById(req.params.id);
      if (!diary) {
        return res.status(404).json({ message: "Diary not found" });
      }
      console.log("success delete diary", diary);
      return res.status(200).json({ message: "Diary deleted successfully" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Error deleting diary" });
    }
  },

  async lockDiary(req, res) {
    try {
      const diary = await Diary.findById(req.params.id);
      if (!diary) {
        return res.status(404).json({ message: "Diary not found" });
      }
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      diary.locked = true;
      diary.password = hashedPassword; // Store the password in the diary document
      await diary.save();
      console.log("success lock diary", diary);
      return res.status(200).json({ message: "Diary locked successfully" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Error locking diary" });
    }
  },

  async unlockDiary(req, res) {
    try {
      const diary = await Diary.findById(req.params.id);
      if (!diary) {
        return res.status(404).json({ message: "Diary not found" });
      }
      if (!diary.locked) {
        return res.status(400).json({ message: "Diary is not locked" });
      }
      const isMatch = await bcrypt.compare(req.body.password, diary.password);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid password" });
      }
      diary.locked = false;
      diary.password = null; // Remove the password from the diary document
      await diary.save();
      console.log("success unlock diary", diary);
      return res.status(200).json({ message: "Diary unlocked successfully" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Error unlocking diary" });
    }
  },
};
module.exports = diaryController;