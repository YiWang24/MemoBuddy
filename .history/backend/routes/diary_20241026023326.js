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

router
  .route("/")
  .get(middlewares.authMiddleware, diaryController.getDiaries)
  .post(
    middlewares.authMiddleware,
    middlewares.uploadMiddleware.array("images"),
    diaryController.createDiary
  );
/**
 * @swagger
 * /api/diary/{id}:
 *   get:
 *     summary: Retrieve a specific diary
 *     tags: [diary]
 *     security:
 *       - basicAuth: []
 *       - apiKeyAuth:
 *           type: apiKey
 *           in: header
 *           name: Authorization
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Diary retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Diary'
 *       500:
 *         description: Error getting diary
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error getting diary
 */

/**
 * @swagger
 * /api/diary/{id}:
 *   put:
 *     summary: Update a specific diary
 *     tags: [diary]
 *     security:
 *       - basicAuth: []
 *       - apiKeyAuth:
 *           type: apiKey
 *           in: header
 *           name: Authorization
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Diary'
 *     responses:
 *       200:
 *         description: Diary updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Diary'
 *       500:
 *         description: Error updating diary
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error updating diary
 */

/**
 * @swagger
 * /api/diary/{id}:
 *   delete:
 *     summary: Delete a specific diary
 *     tags: [diary]
 *     security:
 *       - basicAuth: []
 *       - apiKeyAuth:
 *           type: apiKey
 *           in: header
 *           name: Authorization
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Diary deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Diary deleted successfully
 *       500:
 *         description: Error deleting diary
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error deleting diary
 */

router
  .route("/:id")
  .get(middlewares.authMiddleware, diaryController.getDiaries)
  .put(
    middlewares.authMiddleware,
    middlewares.uploadMiddleware.array("images"),
    diaryController.updateDiary
  )
  .delete(middlewares.authMiddleware, diaryController.deleteDiary);

/**
 * @swagger
 * /api/diary/{id}/lock:
 *   put:
 *     summary: Lock a specific diary
 *     tags: [diary]
 *     security:
 *       - basicAuth: []
 *       - apiKeyAuth:
 *           type: apiKey
 *           in: header
 *           name: Authorization
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Diary locked successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Diary locked successfully
 *       500:
 *         description: Error locking diary
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error locking diary
 */

router.put("/:id/lock", middlewares.authMiddleware, diaryController.lockDiary);

/**
 * @swagger
 * /api/diary/{id}/unlock:
 *   put:
 *     summary: Unlock a specific diary
 *     tags: [diary]
 *     security:
 *       - basicAuth: []
 *       - apiKeyAuth:
 *           type: apiKey
 *           in: header
 *           name: Authorization
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Diary unlocked successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Diary unlocked successfully
 *       500:
 *         description: Error unlocking diary
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error unlocking diary
 */

router.put(
  "/:id/unlock",
  middlewares.authMiddleware,
  diaryController.unlockDiary
);

module.exports = router;
