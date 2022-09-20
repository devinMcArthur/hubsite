import { Field, ID, ObjectType } from 'type-graphql'

import Address from './Address'

@ObjectType()
export default class Office {
  @Field(() => ID)
  id: string

  @Field(() => String)
  name: string

  @Field(() => Address)
  address: Address

  @Field(() => Date)
  createdAt: Date

  @Field(() => Date)
  updatedAt: Date
}
