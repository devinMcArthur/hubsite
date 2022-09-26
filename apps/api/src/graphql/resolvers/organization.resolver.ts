import {
  OrganizationService,
  OrganizationSchema,
  OfficeSchema,
  EmployeeSchema,
} from "hubsite-models";
import { Ctx, FieldResolver, Query, Resolver, Root } from "type-graphql";
import { Service } from "typedi";
import { IContext } from "../../typescript/graphql";

@Service()
@Resolver(() => OrganizationSchema)
export class OrganizationResolver {
  constructor(private readonly organizationService: OrganizationService) {}

  /**
   * ----- Field Resolvers -----
   */

  @FieldResolver(() => [OfficeSchema])
  offices(@Root() organization: OrganizationSchema) {
    return this.organizationService.getOffices(organization);
  }

  @FieldResolver(() => [EmployeeSchema])
  async employees(@Root() organization: OrganizationSchema) {
    return this.organizationService.getEmployees(organization);
  }

  /**
   * ----- Queries -----
   */

  @Query(() => [OrganizationSchema], { nullable: true })
  async allOrganizations(@Ctx() ctx: IContext) {
    return ctx.prisma.organization.findMany();
  }
}
