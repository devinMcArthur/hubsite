import { Ctx, FieldResolver, Resolver, Root } from "type-graphql";

import { IContext } from "../../typescript/graphql";
import Address from "../schemas/Address";
import EmployeeOnOffice from "../schemas/EmployeeOnOffice";
import Office from "../schemas/Office";
import Organization from "../schemas/Organization";

@Resolver(() => Office)
export default class OfficeResolver {
  /**
   * ----- Field Resolvers -----
   */

  @FieldResolver(() => Address)
  address(@Root() office: Office, @Ctx() ctx: IContext) {
    return ctx.prisma.office
      .findUnique({
        where: {
          id: office.id,
        },
      })
      .address();
  }

  @FieldResolver(() => [EmployeeOnOffice])
  async employees(@Root() office: Office, @Ctx() ctx: IContext) {
    return await ctx.prisma.office
      .findUnique({
        where: { id: office.id },
      })
      .employees();
  }

  @FieldResolver(() => Organization)
  organization(@Root() office: Office, @Ctx() ctx: IContext) {
    return ctx.prisma.office
      .findUnique({
        where: {
          id: office.id,
        },
      })
      .organization();
  }
}
