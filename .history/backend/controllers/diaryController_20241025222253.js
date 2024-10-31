const Diary = require('../models/Diary');
const diaryController = {
    async getDiaries(req, res) {
        try {
            if(!req.user){
                return res.status(401).json({ message: "Unauthorized" });
            }
            const diaries = await Diary.find({ user: req.user._id });
            return res.status(200).json(diaries);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Error getting diaries" });
        }
    },

    async createDiary(req,res){
        const {title,content,image} = req.req
        const diary = new Diary({title,content,image,user:req.user._id});
        await diary.save();
        

    }
}
module.exports = diaryController;