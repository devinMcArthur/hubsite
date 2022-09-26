import { Ctx, FieldResolver, Resolver, Root } from "type-graphql";
import { IContext } from "../../typescript/graphql";

import {
  EmployeeSchema,
  UserSchema,
  OfficeSchema,
  OrganizationSchema,
  EmployeeService,
} from "hubsite-models";
import { Service } from "typedi";

@Service()
@Resolver(() => EmployeeSchema)
export class EmployeeResolver {
  constructor(private readonly employeeService: EmployeeService) {}

  /**
   * ----- Field Resolvers -----
   */

  @FieldResolver(() => UserSchema)
  user(@Root() employee: EmployeeSchema, @Ctx() ctx: IContext) {
    return ctx.prisma.employee
      .findUnique({
        where: {
          id: employee.id,
        },
      })
      .user();
  }

  @FieldResolver(() => [OfficeSchema])
  offices(@Root() employee: EmployeeSchema, @Ctx() ctx: IContext) {
    return ctx.prisma.employee
      .findUnique({
        where: {
          id: employee.id,
        },
      })
      .offices();
  }

  @FieldResolver(() => OrganizationSchema)
  organization(@Root() employee: EmployeeSchema, @Ctx() ctx: IContext) {
    return ctx.prisma.employee
      .findUnique({
        where: {
          id: employee.id,
        },
      })
      .organization();
  }
}
