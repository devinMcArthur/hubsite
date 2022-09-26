import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class EmployeesOnOfficesSchema {
  @Field()
  createdBy: string;

  @Field(() => ID)
  employeeId: string;

  @Field(() => ID)
  officeId: string;
}
