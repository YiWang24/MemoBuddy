const diaryController = require("../controllers/diaryController");
const express = require("express");
const isLogged = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");
const router = express.Router();

/**
 * @swagger
 * /api/diary:
 *   get:
 *     summary: Retrieve all diaries for the authenticated user
 *     tags: [diary]
 *     security:
 *       - basicAuth: []
 *       - apiKeyAuth:
 *           type: apiKey
 *           in: header
 *           name: Authorization
 *     responses:
 *       200:
 *         description: A list of diaries belonging to the authenticated user
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Diary'
 *       500:
 *         description: Error getting diaries
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error getting diaries
 */

router
  .route("/")
  .get(middlewares., diaryController.getDiaries)
  .post(middlewares., upload.array("images"), diaryController.createDiary);

router
  .route("/:id")
  .get(middlewares., diaryController.getDiaries)
  .put(middlewares., diaryController.updateDiary)
  .delete(middlewares., diaryController.deleteDiary);

router.put("/:id/lock", middlewares., diaryController.lockDiary);
router.put("/:id/unlock", middlewares., diaryController.unlockDiary);

module.exports = router;