import { Ctx, FieldResolver, Resolver, Root } from "type-graphql";
import { IContext } from "../../typescript/graphql";

import Employee from "../schemas/Employee";
import EmployeeOnOffice from "../schemas/EmployeeOnOffice";
import Office from "../schemas/Office";

@Resolver(() => EmployeeOnOffice)
export default class EmployeeOnOfficeResolver {
  /**
   * ----- Field Resolvers -----
   */

  @FieldResolver(() => Employee)
  employee(@Root() employeeOnOffice: EmployeeOnOffice, @Ctx() ctx: IContext) {
    return ctx.prisma.employeesOnOffice
      .findUnique({
        where: {
          employeeId_officeId: {
            officeId: employeeOnOffice.officeId,
            employeeId: employeeOnOffice.employeeId,
          },
        },
      })
      .employee();
  }

  @FieldResolver(() => Office)
  office(@Root() employeeOnOffice: EmployeeOnOffice, @Ctx() ctx: IContext) {
    return ctx.prisma.employeesOnOffice
      .findUnique({
        where: {
          employeeId_officeId: {
            officeId: employeeOnOffice.officeId,
            employeeId: employeeOnOffice.employeeId,
          },
        },
      })
      .office();
  }
}
