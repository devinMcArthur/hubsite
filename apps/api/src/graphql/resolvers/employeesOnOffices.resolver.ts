import { FieldResolver, Resolver, Root } from "type-graphql";

import {
  EmployeesOnOfficesSchema,
  EmployeeSchema,
  OfficeSchema,
  EmployeesOnOfficesService,
  EmployeesOnOffices,
} from "hubsite-models";
import { Service } from "typedi";

@Service()
@Resolver(() => EmployeesOnOfficesSchema)
export class EmployeesOnOfficesResolver {
  constructor(
    private readonly employeesOnOfficesService: EmployeesOnOfficesService,
  ) {}

  /**
   * ----- Field Resolvers -----
   */

  @FieldResolver(() => EmployeeSchema)
  employee(@Root() employeeOnOffice: EmployeesOnOffices) {
    return this.employeesOnOfficesService.getEmployee(employeeOnOffice);
  }

  @FieldResolver(() => OfficeSchema)
  office(@Root() employeeOnOffice: EmployeesOnOffices) {
    return this.employeesOnOfficesService.getOffice(employeeOnOffice);
  }
}
