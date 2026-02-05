import mongoose, { Schema, Document } from "mongoose";

export interface IConversation extends Document {
  title: string;
  createdBy: mongoose.Types.ObjectId;
}

const conversationSchema: Schema<IConversation> = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model<IConversation>("Conversation", conversationSchema);
