import { Ctx, FieldResolver, Resolver, Root } from "type-graphql";
import { IContext } from "../../typescript/graphql";

import Employee from "../schemas/Employee";
import Office from "../schemas/Office";
import Organization from "../schemas/Organization";
import User from "../schemas/User";

@Resolver(() => Employee)
export default class EmployeeResolver {
  /**
   * ----- Field Resolvers -----
   */

  @FieldResolver(() => User)
  user(@Root() employee: Employee, @Ctx() ctx: IContext) {
    return ctx.prisma.employee
      .findUnique({
        where: {
          id: employee.id,
        },
      })
      .user();
  }

  @FieldResolver(() => [Office])
  offices(@Root() employee: Employee, @Ctx() ctx: IContext) {
    return ctx.prisma.employee
      .findUnique({
        where: {
          id: employee.id,
        },
      })
      .offices();
  }

  @FieldResolver(() => Organization)
  organization(@Root() employee: Employee, @Ctx() ctx: IContext) {
    return ctx.prisma.employee
      .findUnique({
        where: {
          id: employee.id,
        },
      })
      .organization();
  }
}
