import { Field, ID, ObjectType } from "type-graphql";
import { EmployeeSchema } from "../";

@ObjectType()
export class UserSchema {
  @Field(() => ID)
  id: string;

  @Field()
  phone: string;

  @Field()
  firstName: string;

  @Field({ nullable: true })
  middleName?: string;

  @Field()
  lastName: string;

  @Field(() => [EmployeeSchema])
  employees: EmployeeSchema[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
