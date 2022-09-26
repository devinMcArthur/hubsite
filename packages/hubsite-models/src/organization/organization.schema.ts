import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class OrganizationSchema {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
