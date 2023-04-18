const prismaClient = require("../prisma/client/prismaClient");

class UserDAO {
	constructor() {
		this.user = prismaClient.user;
	}
	async addUser(user) {
		const newUser = await this.users.create({
			data: { ...user, conversations: { create: [{ title: "conversation" }] } },
		});
		return newUser;
	}

	async findUserByMail(email) {
		return await this.users.findUnique({
			where: { email },
			select: { email: true, password: true, uid: true, conversations: true },
		});
	}

	async findUserByUid(uid) {
		return await this.users.findFirst({
			where: { uid: uid },
			select: {
				email: true,
				password: true,
				uid: true,
				passwordChangeAt: true,
				conversations: true,
			},
		});
	}

	async getAllUsers() {
		return await this.users.findMany({
			select: {
				id: true,
				firstName: true,
				lastName: true,
				email: true,
				uid: true,
			},
		});
	}
}

const userDAO = new UserDAO();

module.exports = userDAO;
