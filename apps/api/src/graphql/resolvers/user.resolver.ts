import { Ctx, FieldResolver, Resolver, Root } from "type-graphql";
import { IContext } from "../../typescript/graphql";

import { UserSchema, EmployeeSchema, UserService } from "hubsite-models";
import { Service } from "typedi";

@Service()
@Resolver(() => UserSchema)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  /**
   * ----- Field Resolvers -----
   */

  @FieldResolver(() => [EmployeeSchema])
  employees(@Root() user: UserSchema, @Ctx() ctx: IContext) {
    return ctx.prisma.user
      .findUnique({
        where: {
          id: user.id,
        },
      })
      .employees();
  }
}
