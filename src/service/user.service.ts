import { PrismaClient, User } from "@prisma/client";
const userRepository = new PrismaClient().user;

export class UserService {

    public static findAll() {
        return userRepository.findMany();
    }

    public static async findById(id: number) {
        return await userRepository.findUnique({
            where: { id },
            include: {
                createdTodos: true,
                assignedTodos: true
            }
        })
    }

    public static async createUser(user: User) {
        return await userRepository.create({
            data: user
        });
    }

}