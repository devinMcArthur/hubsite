import { EmployeeRole } from "@prisma/client";
import { Field, InputType } from "type-graphql";

@InputType()
export class EmployeeCreateInput {
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
}
