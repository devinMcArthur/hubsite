import { PrismaClient } from "@prisma/client";
import { Ctx, FieldResolver, Query, Resolver, Root } from "type-graphql";
import { IContext } from "../../typescript/graphql";
import Employee from "../schemas/Employee";
import Office from "../schemas/Office";
import Organization from "../schemas/Organization";

const prisma = new PrismaClient();

@Resolver(() => Organization)
export default class OrganizationResolver {
  /**
   * ----- Field Resolvers -----
   */

  @FieldResolver(() => [Office])
  offices(@Root() organization: Organization, @Ctx() ctx: IContext) {
    return ctx.prisma.organization
      .findUnique({
        where: {
          id: organization.id,
        },
      })
      .offices();
  }

  @FieldResolver(() => [Employee])
  async employees(@Root() organization: Organization, @Ctx() ctx: IContext) {
    return ctx.prisma.organization
      .findUnique({
        where: {
          id: organization.id,
        },
      })
      .employees();
  }

  /**
   * ----- Queries -----
   */

  @Query(() => [Organization], { nullable: true })
  async allOrganizations() {
    return prisma.organization.findMany();
  }
}
