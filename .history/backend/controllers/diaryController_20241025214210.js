const Diary = require('../models/Diary');
const diaryController = {
    async getDiaries(req, res) {
        try {
            const diaries = await Diary.find({ user: req.user._id });
            return res.status(200).json(diaries);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Error getting diaries" });
        }
    },
    async createDiary(req,res){
        
    }
}
module.exports = diaryController;