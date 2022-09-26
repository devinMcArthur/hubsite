import {
  OfficeService,
  OfficeSchema,
  AddressSchema,
  EmployeesOnOfficesSchema,
  OrganizationSchema,
} from "hubsite-models";
import { FieldResolver, Resolver, Root } from "type-graphql";
import { Service } from "typedi";

@Service()
@Resolver(() => OfficeSchema)
export class OfficeResolver {
  constructor(private readonly officeService: OfficeService) {}

  /**
   * ----- Field Resolvers -----
   */

  @FieldResolver(() => AddressSchema)
  address(@Root() office: OfficeSchema) {
    return this.officeService.getAddress(office);
  }

  @FieldResolver(() => [EmployeesOnOfficesSchema])
  async employees(@Root() office: OfficeSchema) {
    return this.officeService.getEmployees(office);
  }

  @FieldResolver(() => OrganizationSchema)
  organization(@Root() office: OfficeSchema) {
    return this.officeService.getOrganization(office);
  }
}
