const prismaClient = require("../prisma/client/prismaClient");

class UserDAO {
	constructor() {
		this.user = prismaClient.user;
	}
}

const userDAO = new UserDAO();

module.exports = userDAO;
