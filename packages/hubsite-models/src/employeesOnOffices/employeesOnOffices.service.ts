import { Service, Inject } from "typedi";
import { EmployeesOnOffices, PrismaClient } from "../prisma";

@Service()
export class EmployeesOnOfficesService {
  constructor(@Inject("PRISMA") private readonly prisma: PrismaClient) {}

  /**
   * ----- Get -----
   */

  async getEmployee(employeeOnOffice: EmployeesOnOffices) {
    return this.prisma.employeesOnOffices
      .findUnique({
        where: {
          employeeId_officeId: {
            employeeId: employeeOnOffice.employeeId,
            officeId: employeeOnOffice.officeId,
          },
        },
      })
      .employee();
  }

  async getOffice(employeeOnOffice: EmployeesOnOffices) {
    return this.prisma.employeesOnOffices
      .findUnique({
        where: {
          employeeId_officeId: {
            employeeId: employeeOnOffice.employeeId,
            officeId: employeeOnOffice.officeId,
          },
        },
      })
      .office();
  }
}
