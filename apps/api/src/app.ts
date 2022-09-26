import express from "express";
import cors from "cors";

import { buildTypeDefsAndResolvers } from "type-graphql";

import {
  AddressResolver,
  EmployeeResolver,
  EmployeesOnOfficesResolver,
  OfficeResolver,
  OrganizationResolver,
  UserResolver,
} from "./graphql/resolvers";

import { makeExecutableSchema } from "@graphql-tools/schema";
import { ApolloServer } from "apollo-server-express";
import { createServer } from "http";
import { Container } from "typedi";

import { IContext } from "./typescript/graphql";
import { prisma } from "hubsite-models";

Container.set({ id: "PRISMA", factory: () => prisma });

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
      EmployeesOnOfficesResolver,
    ],
    container: Container,
  });

  const schema = makeExecutableSchema({
    resolvers,
    typeDefs,
  });

  const httpServer = createServer(app);

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
