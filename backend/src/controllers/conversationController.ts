import { Request, Response } from "express";
import Conversation from "../models/Conversation";

interface AuthRequest extends Request {
  userId?: string;
}

// CREATE conversation
export const createConversation = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const conversation = await Conversation.create({
      title,
      createdBy: req.userId
    });

    res.status(201).json(conversation);
  } catch (error) {
    res.status(500).json({ message: "Failed to create conversation" });
  }
};

// GET all conversations for logged-in user
export const getConversations = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const conversations = await Conversation.find({
      createdBy: req.userId
    }).sort({ createdAt: -1 });

    res.json(conversations);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch conversations" });
  }
};

// GET single conversation
export const getConversationById = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const conversation = await Conversation.findOne({
      _id: req.params.id,
      createdBy: req.userId
    });

    if (!conversation) {
      return res.status(404).json({ message: "Conversation not found" });
    }

    res.json(conversation);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch conversation" });
  }
};

// DELETE conversation
export const deleteConversation = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const deleted = await Conversation.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.userId
    });

    if (!deleted) {
      return res.status(404).json({ message: "Conversation not found" });
    }

    res.json({ message: "Conversation deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete conversation" });
  }
};
