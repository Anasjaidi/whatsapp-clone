const prismaClient = require('../prisma/client/prismaClient')

class ChatDAO {
  constructor() {
    this.chat = prismaClient.chat
  }
}

const chatDAO = new ChatDAO()

module.exports = chatDAO