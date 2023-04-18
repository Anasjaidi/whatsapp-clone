const prismaClient = require("../prisma/client/prismaClient");

class MessageDAO {
	constructor() {
		this.message = prismaClient.message;
	}
}

const messageDAO = new MessageDAO();

module.exports = messageDAO;
