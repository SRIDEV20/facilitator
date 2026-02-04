const mongoose = require("mongoose");

const actionSchema = new mongoose.Schema(
  {
    conversationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Conversation",
      required: true
    },
    text: {
      type: String,
      required: true
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    status: {
      type: String,
      enum: ["pending", "done"],
      default: "pending"
    },
    dueDate: {
      type: Date
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Action", actionSchema);
