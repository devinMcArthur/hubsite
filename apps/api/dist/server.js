"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
var __decorateParam = (index, decorator) => (target, key) => decorator(target, key, index);

// src/server.ts
var dotenv = __toESM(require("dotenv"));
var import_path = __toESM(require("path"));
var import_reflect_metadata = require("reflect-metadata");
var import_client = require("@prisma/client");

// src/app.ts
var import_express = __toESM(require("express"));
var import_cors = __toESM(require("cors"));
var import_type_graphql7 = require("type-graphql");

// src/graphql/resolvers/address.resolver.ts
var import_type_graphql = require("type-graphql");
var import_hubsite_models = require("hubsite-models");
var AddressResolver = class {
};
AddressResolver = __decorateClass([
  (0, import_type_graphql.Resolver)(() => import_hubsite_models.AddressSchema)
], AddressResolver);

// src/graphql/resolvers/employee.resolver.ts
var import_type_graphql2 = require("type-graphql");
var import_hubsite_models2 = require("hubsite-models");
var import_typedi = require("typedi");
var EmployeeResolver = class {
  constructor(employeeService) {
    this.employeeService = employeeService;
  }
  user(employee, ctx) {
    return ctx.prisma.employee.findUnique({
      where: {
        id: employee.id
      }
    }).user();
  }
  offices(employee, ctx) {
    return ctx.prisma.employee.findUnique({
      where: {
        id: employee.id
      }
    }).offices();
  }
  organization(employee, ctx) {
    return ctx.prisma.employee.findUnique({
      where: {
        id: employee.id
      }
    }).organization();
  }
};
__decorateClass([
  (0, import_type_graphql2.FieldResolver)(() => import_hubsite_models2.UserSchema),
  __decorateParam(0, (0, import_type_graphql2.Root)()),
  __decorateParam(1, (0, import_type_graphql2.Ctx)())
], EmployeeResolver.prototype, "user", 1);
__decorateClass([
  (0, import_type_graphql2.FieldResolver)(() => [import_hubsite_models2.OfficeSchema]),
  __decorateParam(0, (0, import_type_graphql2.Root)()),
  __decorateParam(1, (0, import_type_graphql2.Ctx)())
], EmployeeResolver.prototype, "offices", 1);
__decorateClass([
  (0, import_type_graphql2.FieldResolver)(() => import_hubsite_models2.OrganizationSchema),
  __decorateParam(0, (0, import_type_graphql2.Root)()),
  __decorateParam(1, (0, import_type_graphql2.Ctx)())
], EmployeeResolver.prototype, "organization", 1);
EmployeeResolver = __decorateClass([
  (0, import_typedi.Service)(),
  (0, import_type_graphql2.Resolver)(() => import_hubsite_models2.EmployeeSchema)
], EmployeeResolver);

// src/graphql/resolvers/employeesOnOffices.resolver.ts
var import_type_graphql3 = require("type-graphql");
var import_hubsite_models3 = require("hubsite-models");
var import_typedi2 = require("typedi");
var EmployeesOnOfficesResolver = class {
  constructor(employeesOnOfficesService) {
    this.employeesOnOfficesService = employeesOnOfficesService;
  }
  employee(employeeOnOffice, ctx) {
    return ctx.prisma.employeesOnOffice.findUnique({
      where: {
        employeeId_officeId: {
          officeId: employeeOnOffice.officeId,
          employeeId: employeeOnOffice.employeeId
        }
      }
    }).employee();
  }
  office(employeeOnOffice, ctx) {
    return ctx.prisma.employeesOnOffice.findUnique({
      where: {
        employeeId_officeId: {
          officeId: employeeOnOffice.officeId,
          employeeId: employeeOnOffice.employeeId
        }
      }
    }).office();
  }
};
__decorateClass([
  (0, import_type_graphql3.FieldResolver)(() => import_hubsite_models3.EmployeeSchema),
  __decorateParam(0, (0, import_type_graphql3.Root)()),
  __decorateParam(1, (0, import_type_graphql3.Ctx)())
], EmployeesOnOfficesResolver.prototype, "employee", 1);
__decorateClass([
  (0, import_type_graphql3.FieldResolver)(() => import_hubsite_models3.OfficeSchema),
  __decorateParam(0, (0, import_type_graphql3.Root)()),
  __decorateParam(1, (0, import_type_graphql3.Ctx)())
], EmployeesOnOfficesResolver.prototype, "office", 1);
EmployeesOnOfficesResolver = __decorateClass([
  (0, import_typedi2.Service)(),
  (0, import_type_graphql3.Resolver)(() => import_hubsite_models3.EmployeesOnOfficesSchema)
], EmployeesOnOfficesResolver);

// src/graphql/resolvers/office.resolver.ts
var import_hubsite_models4 = require("hubsite-models");
var import_type_graphql4 = require("type-graphql");
var import_typedi3 = require("typedi");
var OfficeResolver = class {
  constructor(officeService) {
    this.officeService = officeService;
  }
  address(office) {
    return this.officeService.getAddress(office);
  }
  async employees(office) {
    return this.officeService.getEmployees(office);
  }
  organization(office) {
    return this.officeService.getOrganization(office);
  }
};
__decorateClass([
  (0, import_type_graphql4.FieldResolver)(() => import_hubsite_models4.AddressSchema),
  __decorateParam(0, (0, import_type_graphql4.Root)())
], OfficeResolver.prototype, "address", 1);
__decorateClass([
  (0, import_type_graphql4.FieldResolver)(() => [import_hubsite_models4.EmployeesOnOfficesSchema]),
  __decorateParam(0, (0, import_type_graphql4.Root)())
], OfficeResolver.prototype, "employees", 1);
__decorateClass([
  (0, import_type_graphql4.FieldResolver)(() => import_hubsite_models4.OrganizationSchema),
  __decorateParam(0, (0, import_type_graphql4.Root)())
], OfficeResolver.prototype, "organization", 1);
OfficeResolver = __decorateClass([
  (0, import_typedi3.Service)(),
  (0, import_type_graphql4.Resolver)(() => import_hubsite_models4.OfficeSchema)
], OfficeResolver);

// src/graphql/resolvers/organization.resolver.ts
var import_hubsite_models5 = require("hubsite-models");
var import_type_graphql5 = require("type-graphql");
var import_typedi4 = require("typedi");
var OrganizationResolver = class {
  constructor(organizationService) {
    this.organizationService = organizationService;
  }
  offices(organization) {
    return this.organizationService.getOffices(organization);
  }
  async employees(organization) {
    return this.organizationService.getEmployees(organization);
  }
  async allOrganizations(ctx) {
    return ctx.prisma.organization.findMany();
  }
};
__decorateClass([
  (0, import_type_graphql5.FieldResolver)(() => [import_hubsite_models5.OfficeSchema]),
  __decorateParam(0, (0, import_type_graphql5.Root)())
], OrganizationResolver.prototype, "offices", 1);
__decorateClass([
  (0, import_type_graphql5.FieldResolver)(() => [import_hubsite_models5.EmployeeSchema]),
  __decorateParam(0, (0, import_type_graphql5.Root)())
], OrganizationResolver.prototype, "employees", 1);
__decorateClass([
  (0, import_type_graphql5.Query)(() => [import_hubsite_models5.OrganizationSchema], { nullable: true }),
  __decorateParam(0, (0, import_type_graphql5.Ctx)())
], OrganizationResolver.prototype, "allOrganizations", 1);
OrganizationResolver = __decorateClass([
  (0, import_typedi4.Service)(),
  (0, import_type_graphql5.Resolver)(() => import_hubsite_models5.OrganizationSchema)
], OrganizationResolver);

// src/graphql/resolvers/user.resolver.ts
var import_type_graphql6 = require("type-graphql");
var import_hubsite_models6 = require("hubsite-models");
var import_typedi5 = require("typedi");
var UserResolver = class {
  constructor(userService) {
    this.userService = userService;
  }
  employees(user, ctx) {
    return ctx.prisma.user.findUnique({
      where: {
        id: user.id
      }
    }).employees();
  }
};
__decorateClass([
  (0, import_type_graphql6.FieldResolver)(() => [import_hubsite_models6.EmployeeSchema]),
  __decorateParam(0, (0, import_type_graphql6.Root)()),
  __decorateParam(1, (0, import_type_graphql6.Ctx)())
], UserResolver.prototype, "employees", 1);
UserResolver = __decorateClass([
  (0, import_typedi5.Service)(),
  (0, import_type_graphql6.Resolver)(() => import_hubsite_models6.UserSchema)
], UserResolver);

// src/app.ts
var import_schema = require("@graphql-tools/schema");
var import_apollo_server_express = require("apollo-server-express");
var import_http = require("http");
var import_typedi6 = require("typedi");
var import_hubsite_models7 = require("hubsite-models");
import_typedi6.Container.set({ id: "PRISMA", factory: () => import_hubsite_models7.prisma });
var createApp = async () => {
  const app = (0, import_express.default)();
  app.use((0, import_cors.default)());
  app.use(import_express.default.json({ limit: "100mb" }));
  const { typeDefs, resolvers } = await (0, import_type_graphql7.buildTypeDefsAndResolvers)({
    resolvers: [
      OrganizationResolver,
      AddressResolver,
      OfficeResolver,
      EmployeeResolver,
      UserResolver,
      EmployeesOnOfficesResolver
    ],
    container: import_typedi6.Container
  });
  const schema = (0, import_schema.makeExecutableSchema)({
    resolvers,
    typeDefs
  });
  const httpServer = (0, import_http.createServer)(app);
  const apolloServer = new import_apollo_server_express.ApolloServer({
    schema,
    context: async ({ req, res }) => {
      return {
        req,
        res,
        prisma: import_hubsite_models7.prisma
      };
    }
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({
    app,
    cors: false
  });
  return httpServer;
};
var app_default = createApp;

// src/server.ts
var import_awesome_phonenumber = require("awesome-phonenumber");
var production = process.env.NODE_ENV === "production";
if (process.env.NODE_ENV === "development" || !process.env.NODE_ENV) {
  dotenv.config({ path: import_path.default.join(__dirname, "..", ".env.development") });
}
var prisma2 = new import_client.PrismaClient();
async function main() {
  const port = process.env.PORT || 8080;
  const app = await app_default();
  const parsed = (0, import_awesome_phonenumber.parsePhoneNumber)("+14039737408");
  console.log(parsed.getNumber("national"));
  const server = app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });
  server.setTimeout(3 * 60 * 1e3);
}
main().then(async () => {
  await prisma2.$disconnect();
}).catch(async (error) => {
  console.error(error);
  await prisma2.$disconnect();
  process.exit(1);
});
