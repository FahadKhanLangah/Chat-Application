import { Conversation } from "../models/conversation.model.js";
import { Message } from "../models/message.model.js";


export const sendMessage = async (req, res) => {
  try {
    const sender = req.user;
    const reciever = req.params.id;
    const { message } = req.body;
    let gotConversation = await Conversation.findOne({
      participant: { $all: [sender, reciever] }
    })
    if (!gotConversation) {
      gotConversation = await Conversation.create({
        participant: [sender, reciever]
      })
    }
    const newMessage = await Message.create({
      sender, reciever, message
    });
    if (newMessage) {
      gotConversation.messages.push(newMessage._id)
    }
    await gotConversation.save();
    // Socket io will be implemented there
    return res.status(200).json({
      success: true,
      message,
    })

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

export const getMessage = async (req, res) => {
  try {
    const sender = req.user;
    const reciever = req.params.id;
    const conversation = await Conversation.findOne({
      participant: { $all: [sender, reciever] }
    }).populate("messages");

    return res.status(200).json({
      success: true,
      conversation
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    })
  }
}