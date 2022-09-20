import express from "express";
import cors from "cors";

import { buildTypeDefsAndResolvers } from "type-graphql";

import OrganizationResolver from "./graphql/resolvers/Organization";
import AddressResolver from "./graphql/resolvers/Address";
import OfficeResolver from "./graphql/resolvers/Office";
import EmployeeResolver from "./graphql/resolvers/Employee";
import UserResolver from "./graphql/resolvers/User";
import EmployeeOnOfficeResolver from "./graphql/resolvers/EmployeeOnOffice";

import { makeExecutableSchema } from "@graphql-tools/schema";
import { ApolloServer } from "apollo-server-express";
import { createServer } from "http";

import { IContext } from "./typescript/graphql";
import { PrismaClient } from "@prisma/client";

const createApp = async () => {
  const app = express();

  app.use(cors());

  app.use(express.json({ limit: "100mb" }));

  const { typeDefs, resolvers } = await buildTypeDefsAndResolvers({
    resolvers: [
      OrganizationResolver,
      AddressResolver,
      OfficeResolver,
      EmployeeResolver,
      UserResolver,
      EmployeeOnOfficeResolver,
    ],
  });

  const schema = makeExecutableSchema({
    resolvers,
    typeDefs,
  });

  const httpServer = createServer(app);

  const prisma = new PrismaClient();

  const apolloServer = new ApolloServer({
    schema,
    context: async ({ req, res }: IContext) => {
      return {
        req,
        res,
        prisma,
      };
    },
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  return httpServer;
};

export default createApp;
