import { Resolver } from 'type-graphql'
import Address from '../schemas/Address'

@Resolver(() => Address)
export default class AddressResolver {}
