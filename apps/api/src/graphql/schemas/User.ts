import { Field, ID, ObjectType } from "type-graphql";
import Employee from "./Employee";

@ObjectType()
export default class User {
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

  @Field(() => [Employee])
  employees: Employee[];
}
