import { PrismaClient } from "@prisma/client";
import { Inject, Service } from "typedi";
import { OfficeSchema } from "..";

@Service()
export class OfficeService {
  constructor(@Inject("PRISMA") private readonly prisma: PrismaClient) {}

  /**
   * ----- Get -----
   */

  async getAddress(office: OfficeSchema) {
    return this.prisma.office
      .findUnique({
        where: {
          id: office.id,
        },
      })
      .address();
  }

  async getEmployees(office: OfficeSchema) {
    return this.prisma.office
      .findUnique({
        where: {
          id: office.id,
        },
      })
      .employees();
  }

  async getOrganization(office: OfficeSchema) {
    return this.prisma.office
      .findUnique({
        where: {
          id: office.id,
        },
      })
      .organization();
  }
}
