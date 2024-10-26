const diaryController = require("../controllers/diaryController");
const Router = require("express");

const router = Router();

/**
 * @swagger
 * /api/diaries:
 *   get:
 *     summary: Retrieve all diaries for the authenticated user
 *     tags: [Diaries]
 *     security:
 *       - basicAuth: []
 *       - apiKeyAuth: []
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

router.get("/", diaryController.getDiaries);
router.post("/", diaryController.createDiary);
router.put("/:id", diaryController.updateDiary);
router.delete("/:id", diaryController.deleteDiary);
router.put("/:id/lock", diaryController.lockDiary);
router.put("/:id/unlock", diaryController.unlockDiary);

module.exports = router;
