import express from "express"
import {sendMessage}  from "../controllers/MessageControllers.js";
import { protect } from "../middlewares/authMiddleware.js";
import { allMessages } from "../controllers/MessageControllers.js";
const router = express.Router();





router.route("/:chatId").get(protect, allMessages);
router.route("/").post(protect, sendMessage);

export default router;