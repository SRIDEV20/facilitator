import { Router } from "express";
import {
  createConversation,
  getConversations,
  getConversationById,
  deleteConversation
} from "../controllers/conversationController";
import { protect } from "../middleware/authMiddleware";

const router = Router();

router.post("/", protect, createConversation);
router.get("/", protect, getConversations);
router.get("/:id", protect, getConversationById);
router.delete("/:id", protect, deleteConversation);

export default router;
