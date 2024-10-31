const diaryController = require("../controllers/diaryController");
const express = require("express");
const middlewares = require("../middleware/index");
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


/**
 * @swagger
 * /api/diary:
 *   post:
 *     summary: Create a new diary
 *     tags: [diary]
 *     security:
 *       - basicAuth: []
 *       - apiKeyAuth:
 *           type: apiKey
 *           in: header
 *           name: Authorization
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Diary'
 *     responses:
 *       201:
 *         description: Diary created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Diary'
 *       500:
 *         description: Error creating diary
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error creating diary
 */
 
/**
 * 
 */
router
  .route("/")
  .get(middlewares.authMiddleware, diaryController.getDiaries)
  .post(
    middlewares.authMiddleware,
    middlewares.uploadMiddleware.array("images"),
    diaryController.createDiary
  );

router
  .route("/:id")
  .get(middlewares.authMiddleware, diaryController.getDiaries)
  .put(
    middlewares.authMiddleware,
    middlewares.uploadMiddleware.array("images"),
    diaryController.updateDiary
  )
  .delete(middlewares.authMiddleware, diaryController.deleteDiary);

router.put("/:id/lock", middlewares.authMiddleware, diaryController.lockDiary);
router.put(
  "/:id/unlock",
  middlewares.authMiddleware,
  diaryController.unlockDiary
);

module.exports = router;
