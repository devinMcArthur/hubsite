import { jsonwt } from "api-utils";
import { Service, Inject } from "typedi";
import { LoginRequestService } from "../loginRequest";
import { LoginRequest, PrismaClient, User } from "../prisma";

@Service()
export class UserService {
  constructor(
    @Inject("PRISMA") private readonly prisma: PrismaClient,
    private readonly loginRequestService: LoginRequestService,
  ) {}

  /**
   * ----- Get -----
   */

  async getFromPhone(phone: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        phone,
      },
    });
  }

  async getFromJWT(token: string): Promise<User | null> {
    if (token) {
      // Decode token
      const decoded = jsonwt.decode(token);

      // Try to get userId from token
      const userId = decoded.userId;

      if (userId) {
        // Try to find user from userId
        const user = await this.prisma.user.findUnique({
          where: {
            id: userId,
          },
        });

        if (!user) return null;
        return user;
      }
    }

    return null;
  }

  async getEmployees(user: User) {
    return this.prisma.user
      .findUnique({
        where: {
          id: user.id,
        },
      })
      .employees();
  }

  /**
   * ----- Create -----
   */

  async createJwt(user: User) {
    const token = jsonwt.sign(
      {
        userId: user.id,
      },
      {
        expiresIn: "4 weeks",
      },
    );

    return token;
  }

  /**
   * ----- Interact -----
   */

  async temporaryPhoneLogin(phone: string) {
    const user = await this.getFromPhone(phone);

    if (user) {
      const loginRequest = await this.loginRequestService.create(user);

      const token = jsonwt.sign(
        {
          loginRequestId: loginRequest.id,
        },
        {
          expiresIn: `${global.tempAuthMinutes}m`,
        },
      );

      return token;
    } else {
      throw new Error("Unable to find a user with that number");
    }
  }

  async codeLogin(code: string, loginRequest: LoginRequest | null) {
    if (!loginRequest) throw new Error("Could not authorize request");

    if (loginRequest.expiresAt.getTime() < new Date().getTime())
      throw new Error("Code has expired, please try again");

    if (code !== loginRequest.code) throw new Error("Invalid code");

    const user = await this.loginRequestService.getUser(loginRequest);

    return this.createJwt(user);
  }
}
