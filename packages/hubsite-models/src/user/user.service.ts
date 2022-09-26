import { Service, Inject } from "typedi";
import { PrismaClient } from "../prisma";

import { UserSchema } from "..";

@Service()
export class UserService {
  constructor(@Inject("PRISMA") private readonly prisma: PrismaClient) {}

  /**
   * ----- Get -----
   */
}
