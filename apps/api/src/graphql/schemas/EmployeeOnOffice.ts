import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export default class EmployeeOnOffice {
  @Field()
  createdBy: string;

  @Field(() => ID)
  employeeId: string;

  @Field(() => ID)
  officeId: string;
}
