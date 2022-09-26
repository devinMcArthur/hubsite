import { Resolver } from "type-graphql";

import { AddressSchema } from "hubsite-models";

@Resolver(() => AddressSchema)
export class AddressResolver {}
