import { LoginRequest, PrismaClient, User } from "../prisma";
import { Inject, Service } from "typedi";
import { sendText } from "api-utils";

@Service()
export class LoginRequestService {
  constructor(@Inject("PRISMA") private readonly prisma: PrismaClient) {}

  /**
   * ----- Get -----
   */

  async getById(id: string) {
    return this.prisma.loginRequest.findUnique({
      where: {
        id,
      },
    });
  }

  async getUser(loginRequest: LoginRequest) {
    const user = await this.prisma.loginRequest
      .findUnique({
        where: {
          id: loginRequest.id,
        },
      })
      .user();

    if (!user) throw new Error("Login request has no user");

    return user;
  }

  /**
   * ----- Create -----
   */

  async create(user: User) {
    const currentTime = new Date();
    currentTime.setMinutes(currentTime.getMinutes() + global.tempAuthMinutes);

    let code = "1234";

    await sendText(user.phone, code);

    return this.prisma.loginRequest.create({
      data: {
        code,
        expiresAt: currentTime,
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });
  }
}
