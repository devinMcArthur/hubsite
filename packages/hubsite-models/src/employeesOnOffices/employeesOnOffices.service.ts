import { Service, Inject } from "typedi";
import { PrismaClient } from "../prisma";

import { EmployeesOnOfficesSchema } from "..";

@Service()
export class EmployeesOnOfficesService {
  constructor(@Inject("PRISMA") private readonly prisma: PrismaClient) {}

  /**
   * ----- Get -----
   */
}
