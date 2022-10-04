import { Field, InputType } from "type-graphql";
import { AddressCreateInput } from "../address";

@InputType()
export class OfficeCreateInput {
  @Field()
  name: string;

  @Field(() => AddressCreateInput)
  address: AddressCreateInput;
}
