import { Field, ObjectType } from "type-graphql";

@ObjectType()
export default class Address {
  @Field()
  address: string;

  @Field({ nullable: true })
  address2?: string;

  @Field()
  region: string;

  @Field()
  country: string;

  @Field()
  city: string;

  @Field()
  postalCode: string;

  @Field({ nullable: true })
  phone?: string;
}
