import { Field, InputType } from "type-graphql";

@InputType()
export class OrganizationCreateInput {
  @Field()
  name: string;
}
