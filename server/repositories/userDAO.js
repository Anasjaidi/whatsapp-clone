const prismaClient = require("../prisma/client/prismaClient");

class UserDAO {
	constructor() {
		this.users = prismaClient.user;
	}
	async addUser(user) {
		const newUser = await this.users.create({
			data: { ...user},
		});
		return newUser;
	}

	async findUserByMail(email) {
		return await this.users.findUnique({
			where: { email },
			select: {  },
		});
	}

	async findUserByUid(uid) {
		return await this.users.findFirst({
			where: { uid: uid },
			select: {
			},
		});
	}

	async getAllUsers() {
		return await this.users.findMany({
		});
	}
}

const userDAO = new UserDAO();

module.exports = userDAO;
