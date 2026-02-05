import mongoose, { Schema, Document } from "mongoose";

export interface IMessage extends Document {
  conversationId: mongoose.Types.ObjectId;
  speaker: string;
  content: string;
  orderIndex: number;
}

const messageSchema: Schema<IMessage> = new Schema(
  {
    conversationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Conversation",
      required: true
    },
    speaker: {
      type: String,
      default: "Unknown"
    },
    content: {
      type: String,
      required: true
    },
    orderIndex: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model<IMessage>("Message", messageSchema);
