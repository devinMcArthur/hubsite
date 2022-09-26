import { EmployeeRole } from "@prisma/client";
import { Field, ID, ObjectType, registerEnumType } from "type-graphql";
import { OfficeSchema, OrganizationSchema, UserSchema } from "..";

registerEnumType(EmployeeRole, {
  name: "EmployeeRole",
});

@ObjectType()
export class EmployeeSchema {
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

  @Field(() => UserSchema, { nullable: true })
  user?: UserSchema | null;

  @Field(() => OrganizationSchema)
  organization: OrganizationSchema;

  @Field(() => [OfficeSchema])
  offices: OfficeSchema[];
}
