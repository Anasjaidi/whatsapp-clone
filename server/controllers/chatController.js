const ErrorsWrapper = require("../errors/ErrorsWrapper");
const chatDAO = require("../repositories/chatDAO");

const getAllChats = ErrorsWrapper(async (req, res, next) => {
  res.status(200).json({
    status: "success"
  })
})

const chatControllers = {getAllChats}

module.exports = chatControllers