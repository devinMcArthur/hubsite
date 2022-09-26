import { Service, Inject } from "typedi";
import { PrismaClient } from "../prisma";

import { EmployeeSchema } from "..";

@Service()
export class EmployeeService {
  constructor(@Inject("PRISMA") private readonly prisma: PrismaClient) {}

  /**
   * ----- Get -----
   */
}
