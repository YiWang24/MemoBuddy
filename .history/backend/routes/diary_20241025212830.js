const diaryController = require("../controllers/diaryController");
const Router = require("express");

const router = Router();

/**
 * @swagger
 * /api/diary:
 *  get:
 *   summary: Get all diaries
 *  tags: [Diary]
 * responses:
 * 
 */
router.get("/", diaryController.getDiaries);
router.post("/", diaryController.createDiary);
router.put("/:id", diaryController.updateDiary);
router.delete("/:id", diaryController.deleteDiary);
router.put("/:id/lock", diaryController.lockDiary);
router.put("/:id/unlock", diaryController.unlockDiary);

module.exports = router;
