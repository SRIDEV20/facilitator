import mongoose, { Schema, Document } from "mongoose";

export interface IDecision extends Document {
  conversationId: mongoose.Types.ObjectId;
  text: string;
}

const decisionSchema: Schema<IDecision> = new Schema(
  {
    conversationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Conversation",
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model<IDecision>("Decision", decisionSchema);
