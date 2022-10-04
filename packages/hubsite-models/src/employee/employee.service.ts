import { Service, Inject } from "typedi";
import { PrismaClient } from "../prisma";

import { jsonwt } from "api-utils";

@Service()
export class EmployeeService {
  constructor(@Inject("PRISMA") private readonly prisma: PrismaClient) {}

  /**
   * ----- Get -----
   */

  async getById(id: string) {
    return this.prisma.employee.findUnique({
      where: {
        id,
      },
    });
  }

  async getUser(id: string) {
    return this.prisma.employee
      .findUnique({
        where: {
          id,
        },
      })
      .user();
  }

  async getOrganization(id: string) {
    return this.prisma.employee
      .findUnique({
        where: {
          id,
        },
      })
      .organization();
  }

  async getOffices(id: string) {
    return this.prisma.employee
      .findUnique({
        where: {
          id,
        },
      })
      .offices();
  }

  /**
   * ----- Interact -----
   */

  async login(id: string, currentToken?: string) {
    if (!currentToken) throw new Error("You do not have permission to do this");

    const decoded = jsonwt.decode(currentToken);

    const userId = decoded.userId;
    if (!userId) throw new Error("You do not have permission to do this");

    const user = await this.getUser(id);
    if (!user) throw new Error("Unable to connect to this employee");

    if (user.id !== userId)
      throw new Error("You do not have permission to connect to this user");

    const employee = await this.getById(id);
    if (!employee) throw new Error("Unable to find selected employee");

    return jsonwt.sign(
      {
        userId,
        employeeId: employee.id,
      },
      {
        expiresIn: "4 weeks",
      },
    );
  }
}
