const Diary = require("../models/Diary");
const diaryController = {
  async getDiaries(req, res) {
    try {
      if (!req.user) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const diaries = await Diary.find({ user: req.user._id });
      return res.status(200).json(diaries);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error getting diaries" });
    }
  },

  async createDiary(req, res) {
    try {
      if (!req.user) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      console.log(req.body)
      const { title, content } = req.body;
      if()
      const images = req.files.map((file) => "/" + file.path);
      const diary = new Diary({ title, content, images, user: req.user._id });
      await diary.save();
      return res
        .status(201)
        .json({ message: "Diary created successfully", diary });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error creating diary" });
    }
  },
};
module.exports = diaryController;
