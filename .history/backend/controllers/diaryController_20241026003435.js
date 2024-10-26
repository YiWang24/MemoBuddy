const Diary = require("../models/Diary");
const bcrypt = require("bcrypt");
const diaryController = {
  async getDiaries(req, res) {
    try {
      const { id } = req.params;
      let diaries;
      if (id) {
        diaries = await Diary.findOne({ _id: id, user: req.user._id });
        if (!diaries) {
          return res.status(404).json({ message: "Diary not found" });
        }
      } else {
        diaries = await Diary.find({ user: req.user._id });
      }

      return res.status(200).json(diaries);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error getting diaries" });
    }
  },

  async createDiary(req, res) {
    try {
      const { title, content } = req.body;
      if (!title || !content) {
        return res
          .status(400)
          .json({ message: "Title and content are required" });
      }
      let images = [];
      if (req.files) {
        images = req.files.map((file) => "/" + file.path);
      }

      const diary = new Diary({ title, content, images, user: req.user._id });
      await diary.save();
      console.log("success create diary", diary);
      return res
        .status(201)
        .json({ message: "Diary created successfully", diary });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error creating diary" });
    }
  },

  async updateDiary(req, res) {
    try {
      const { id } = req.params;
      const { title, content, imagesToRemove } = req.body;
      if (!title || !content) {
        return res
          .status(400)
          .json({ message: "Title and content are required" });
      }
      const diary = await Diary.findOne({ _id: id, user: req.user._id });
      if (!diary) {
        return res.status(404).json({ message: "Diary not found" });
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
        diary.images = [...diary.images, ...newImages];
      }

      await diary.save();
      console.log("success update diary", diary);
      return res
        .status(200)
        .json({ message: "Diary updated successfully", diary });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Error updating diary" });
    }
  },

  async deleteDiary(req, res) {
    try {
      const { id } = req.params;
      const diary = await Diary.findOneAndDelete({
        _id: id,
        user: req.user._id,
      });
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
      const { id } = req.params;
      const { password } = req.body;
      const diary = await Diary.findOne({ _id: id, user: req.user._id });
      if (!diary) {
        return res.status(404).json({ message: "Diary not found" });
      }
      con
      diary.locked = true;
      diary.password = password; // Store the password in the diary document
      await diary.save();
      console.log("success lock diary", diary);
      return res.status(200).json({ message: "Diary locked successfully" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Error locking diary" });
    }
  },
};
module.exports = diaryController;
