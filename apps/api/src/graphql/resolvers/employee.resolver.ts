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
import { IContext } from "../../typescript/graphql";

import {
  EmployeeSchema,
  UserSchema,
  OrganizationSchema,
  EmployeeService,
  EmployeesOnOfficesSchema,
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
  user(@Root() employee: EmployeeSchema) {
    return this.employeeService.getUser(employee.id);
  }

  @FieldResolver(() => [EmployeesOnOfficesSchema])
  offices(@Root() employee: EmployeeSchema) {
    return this.employeeService.getOffices(employee.id);
  }

  @FieldResolver(() => OrganizationSchema)
  organization(@Root() employee: EmployeeSchema) {
    return this.employeeService.getOrganization(employee.id);
  }

  /**
   * ----- Queries -----
   */

  @Authorized()
  @Query(() => EmployeeSchema)
  currentEmployee(@Ctx() ctx: IContext) {
    return ctx.employee;
  }

  /**
   * ----- Mutations -----
   */

  @Authorized(["USER"])
  @Mutation(() => String)
  employeeLogin(@Arg("id") id: string, @Ctx() ctx: IContext) {
    return this.employeeService.login(id, ctx.req.headers.authorization);
  }
}
