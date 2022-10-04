import {
  OrganizationService,
  OrganizationSchema,
  OfficeSchema,
  EmployeeSchema,
  OrganizationCreateInput,
  OfficeCreateInput,
  EmployeeCreateInput,
  UserCreateInput,
} from "hubsite-models";
import {
  Arg,
  Authorized,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import { Service } from "typedi";

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

  @Query(() => OrganizationSchema, { nullable: true })
  async organization(@Arg("id") id: string) {
    return this.organizationService.getById(id);
  }

  /**
   * Mutations
   */

  @Mutation(() => OrganizationSchema)
  async organizationCreate(
    @Arg("organizationData", () => OrganizationCreateInput)
    organizationData: OrganizationCreateInput,
    @Arg("officesData", () => [OfficeCreateInput])
    officesData: OfficeCreateInput[],
    @Arg("employeeData", () => EmployeeCreateInput)
    employeeData: EmployeeCreateInput,
    @Arg("userData", () => UserCreateInput) userData: UserCreateInput,
  ) {
    return this.organizationService.create(
      organizationData,
      officesData,
      employeeData,
      userData,
    );
  }
}
