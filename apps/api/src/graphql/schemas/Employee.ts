import { EmployeeRole } from "@prisma/client";
import { Field, ID, ObjectType, registerEnumType } from "type-graphql";
import Office from "./Office";
import Organization from "./Organization";
import User from "./User";

registerEnumType(EmployeeRole, {
  name: "EmployeeRole",
});

@ObjectType()
export default class Employee {
  @Field(() => ID)
  id: string;

  @Field()
  firstName: string;

  @Field({ nullable: true })
  middleName?: string;

  @Field()
  lastName: string;

  @Field()
  jobTitle: string;

  @Field(() => EmployeeRole)
  role: EmployeeRole;

  @Field(() => User, { nullable: true })
  user?: User | null;

  @Field(() => Organization)
  organization: Organization;

  @Field(() => [Office])
  offices: Office[];
}
