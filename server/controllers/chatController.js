const { generateChatResponse } = require('../services/geminiService');

// @desc    Process chatbot prompt via Gemini & DB context
// @route   POST /api/chat
const handleChat = async (req, res, next) => {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ success: false, error: 'Message text is required.' });
    }

    const reply = await generateChatResponse(message.trim(), history || []);

    res.status(200).json({
      success: true,
      reply,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  handleChat
};
