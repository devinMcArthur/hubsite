import { Service, Inject } from "typedi";
import { PrismaClient } from "../prisma";

import { OrganizationSchema } from "..";

@Service()
export class OrganizationService {
  constructor(@Inject("PRISMA") private readonly prisma: PrismaClient) {}

  /**
   * ----- Get -----
   */

  async getOffices(organization: OrganizationSchema) {
    return this.prisma.organization
      .findUnique({
        where: {
          id: organization.id,
        },
      })
      .offices();
  }

  async getEmployees(organization: OrganizationSchema) {
    return this.prisma.organization
      .findUnique({
        where: {
          id: organization.id,
        },
      })
      .employees();
  }
}
