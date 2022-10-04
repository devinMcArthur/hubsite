import {
  Arg,
  Authorized,
  Ctx,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";

import { UserSchema, EmployeeSchema, UserService, User } from "hubsite-models";
import { Service } from "typedi";
import { IContext } from "../../typescript/graphql";

@Service()
@Resolver(() => UserSchema)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  /**
   * ----- Field Resolvers -----
   */

  @FieldResolver(() => [EmployeeSchema])
  employees(@Root() user: User) {
    return this.userService.getEmployees(user);
  }

  /**
   * ----- Queries -----
   */

  @Query(() => UserSchema)
  currentUser(@Ctx() ctx: IContext) {
    return ctx.user;
  }

  /**
   * ----- Mutations -----
   */

  @Mutation(() => String)
  userLoginPhone(@Arg("phone") phone: string) {
    return this.userService.temporaryPhoneLogin(phone);
  }

  @Authorized(["TEMP"])
  @Mutation(() => String)
  userLoginCode(@Arg("code") code: string, @Ctx() ctx: IContext) {
    return this.userService.codeLogin(code, ctx.loginRequest);
  }
}
