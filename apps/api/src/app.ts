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

import { prisma } from "hubsite-models";
import authChecker from "./graphql/utils/authChecker";
import generateContext from "./graphql/utils/generateContext";

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
    authChecker,
  });

  const schema = makeExecutableSchema({
    resolvers,
    typeDefs,
  });

  const httpServer = createServer(app);

  const apolloServer = new ApolloServer({
    schema,
    context: generateContext,
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  return httpServer;
};

export default createApp;
