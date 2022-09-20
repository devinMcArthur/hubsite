import { ObjectType, Field, ID } from 'type-graphql'

@ObjectType()
export default class Organization {
  @Field(() => ID)
  id: string

  @Field(() => String)
  name: string

  @Field(() => Date)
  createdAt: Date

  @Field(() => Date)
  updatedAt: Date
}
