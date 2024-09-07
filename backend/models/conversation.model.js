import mongoose from "mongoose";

const conversationModel = mongoose.model({
  participant: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  messages: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Message'
  }]
}, { timestamps: true })

export const Conversation = mongoose.model('Conversation', conversationModel)