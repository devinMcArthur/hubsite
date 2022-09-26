import { Field, ID, ObjectType } from "type-graphql";

import { AddressSchema } from "..";

@ObjectType()
export class OfficeSchema {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => AddressSchema)
  address: AddressSchema;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
