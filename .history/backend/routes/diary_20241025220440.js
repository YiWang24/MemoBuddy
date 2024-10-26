const diaryController = require("../controllers/diaryController");
const Router = require("express");
const isLogged = require("../middlewares/isLogged");
const router = Router();

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

router.router('/').get(isLogged, diaryController.getDiaries).
router.get("/", isLogged, diaryController.getDiaries);

router.post("/", isLogged, diaryController.createDiary);
router.put("/:id", isLogged, diaryController.updateDiary);
router.delete("/:id", isLogged, diaryController.deleteDiary);
router.put("/:id/lock", isLogged, diaryController.lockDiary);
router.put("/:id/unlock", isLogged, diaryController.unlockDiary);

module.exports = router;
