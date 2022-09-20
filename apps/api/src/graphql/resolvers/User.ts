import { Ctx, FieldResolver, Resolver, Root } from "type-graphql";
import { IContext } from "../../typescript/graphql";
import Employee from "../schemas/Employee";

import User from "../schemas/User";

@Resolver(() => User)
export default class UserResolver {
  /**
   * ----- Field Resolvers -----
   */

  @FieldResolver(() => [Employee])
  employees(@Root() user: User, @Ctx() ctx: IContext) {
    return ctx.prisma.user
      .findUnique({
        where: {
          id: user.id,
        },
      })
      .employees();
  }
}
