import { Service, Inject } from "typedi";
import { v4 as uuidv4 } from "uuid";
import { Office, PrismaClient } from "../prisma";

import {
  EmployeeCreateInput,
  OfficeCreateInput,
  OrganizationCreateInput,
  OrganizationSchema,
  UserCreateInput,
} from "..";

@Service()
export class OrganizationService {
  constructor(@Inject("PRISMA") private readonly prisma: PrismaClient) {}

  /**
   * ----- Get -----
   */

  async getById(id: string) {
    return this.prisma.organization.findUnique({
      where: {
        id,
      },
    });
  }

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

  /**
   * ----- Create -----
   */

  async create(
    organizationData: OrganizationCreateInput,
    officesData: OfficeCreateInput[],
    employeeData: EmployeeCreateInput,
    userData: UserCreateInput,
  ) {
    const organizationId = uuidv4();
    const employeeId = uuidv4();

    // Create organization
    const organization = await this.prisma.organization.create({
      data: {
        id: organizationId,
        ...organizationData,
        offices: {
          create: officesData.map((data) => {
            const { address, ...rest } = data;
            return {
              ...rest,
              address: {
                create: {
                  ...address,
                },
              },
              employees: {
                create: {
                  createdBy: `${employeeData.firstName}${
                    employeeData.middleName ? ` ${employeeData.middleName}` : ""
                  } ${employeeData.lastName}`,
                  employee: {
                    connect: {
                      id: employeeId,
                    },
                  },
                },
              },
            };
          }),
        },
        employees: {
          create: {
            id: employeeId,
            ...employeeData,
            user: {
              create: {
                ...userData,
              },
            },
          },
        },
      },
    });

    return organization;
  }
}
