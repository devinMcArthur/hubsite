import { Ctx, FieldResolver, Resolver, Root } from "type-graphql";
import { IContext } from "../../typescript/graphql";

import {
  EmployeesOnOfficesSchema,
  EmployeeSchema,
  OfficeSchema,
  EmployeesOnOfficesService,
} from "hubsite-models";
import { Service } from "typedi";

@Service()
@Resolver(() => EmployeesOnOfficesSchema)
export class EmployeesOnOfficesResolver {
  constructor(
    private readonly employeesOnOfficesService: EmployeesOnOfficesService,
  ) {}

  /**
   * ----- Field Resolvers -----
   */

  @FieldResolver(() => EmployeeSchema)
  employee(
    @Root() employeeOnOffice: EmployeesOnOfficesSchema,
    @Ctx() ctx: IContext,
  ) {
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

  @FieldResolver(() => OfficeSchema)
  office(
    @Root() employeeOnOffice: EmployeesOnOfficesSchema,
    @Ctx() ctx: IContext,
  ) {
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
