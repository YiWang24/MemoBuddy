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
/**
/**
262   * @swagger
263   * /api/diary/{id}/unlock:
264   *   put:
265   *     summary: Unlock a specific diary
266   *     tags: [diary]
267   *     security:
268   *       - basicAuth: []
269   *       - apiKeyAuth:
270   *           type: apiKey
271   *           in: header
272   *           name: Authorization
273   *     parameters:
274   *       - in: path
275   *         name: id
276   *         required: true
277   *         schema:
278   *           type: string
279   *     responses:
280   *       200:
281   *         description: Diary unlocked successfully
282   *         content:
283   *           application/json:
284   *             schema:
285   *               type: object
286   *               properties:
287   *                 message:
288   *                   type: string
289   *                   example: Diary unlocked successfully
290   *       500:
291   *         description: Error unlocking diary
292   *         content:
293   *           application/json:
294   *             schema:
295   *               type: object
296   *               properties:
297   *                 message:
298   *                   type: string
299   *                   example: Error unlocking diary
300   */

router.put(
  "/:id/unlock",
  middlewares.authMiddleware,
  diaryController.unlockDiary
);

module.exports = router;
