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
var import_client4 = require("@prisma/client");

// src/app.ts
var import_express = __toESM(require("express"));
var import_cors = __toESM(require("cors"));
var import_type_graphql13 = require("type-graphql");

// src/graphql/resolvers/Organization.ts
var import_client2 = require("@prisma/client");
var import_type_graphql6 = require("type-graphql");

// src/graphql/schemas/Employee.ts
var import_client = require("@prisma/client");
var import_type_graphql5 = require("type-graphql");

// src/graphql/schemas/Office.ts
var import_type_graphql2 = require("type-graphql");

// src/graphql/schemas/Address.ts
var import_type_graphql = require("type-graphql");
var Address = class {
};
__decorateClass([
  (0, import_type_graphql.Field)()
], Address.prototype, "address", 2);
__decorateClass([
  (0, import_type_graphql.Field)({ nullable: true })
], Address.prototype, "address2", 2);
__decorateClass([
  (0, import_type_graphql.Field)()
], Address.prototype, "region", 2);
__decorateClass([
  (0, import_type_graphql.Field)()
], Address.prototype, "country", 2);
__decorateClass([
  (0, import_type_graphql.Field)()
], Address.prototype, "city", 2);
__decorateClass([
  (0, import_type_graphql.Field)()
], Address.prototype, "postalCode", 2);
__decorateClass([
  (0, import_type_graphql.Field)({ nullable: true })
], Address.prototype, "phone", 2);
Address = __decorateClass([
  (0, import_type_graphql.ObjectType)()
], Address);

// src/graphql/schemas/Office.ts
var Office = class {
};
__decorateClass([
  (0, import_type_graphql2.Field)(() => import_type_graphql2.ID)
], Office.prototype, "id", 2);
__decorateClass([
  (0, import_type_graphql2.Field)(() => String)
], Office.prototype, "name", 2);
__decorateClass([
  (0, import_type_graphql2.Field)(() => Address)
], Office.prototype, "address", 2);
__decorateClass([
  (0, import_type_graphql2.Field)(() => Date)
], Office.prototype, "createdAt", 2);
__decorateClass([
  (0, import_type_graphql2.Field)(() => Date)
], Office.prototype, "updatedAt", 2);
Office = __decorateClass([
  (0, import_type_graphql2.ObjectType)()
], Office);

// src/graphql/schemas/Organization.ts
var import_type_graphql3 = require("type-graphql");
var Organization = class {
};
__decorateClass([
  (0, import_type_graphql3.Field)(() => import_type_graphql3.ID)
], Organization.prototype, "id", 2);
__decorateClass([
  (0, import_type_graphql3.Field)(() => String)
], Organization.prototype, "name", 2);
__decorateClass([
  (0, import_type_graphql3.Field)(() => Date)
], Organization.prototype, "createdAt", 2);
__decorateClass([
  (0, import_type_graphql3.Field)(() => Date)
], Organization.prototype, "updatedAt", 2);
Organization = __decorateClass([
  (0, import_type_graphql3.ObjectType)()
], Organization);

// src/graphql/schemas/User.ts
var import_type_graphql4 = require("type-graphql");
var User = class {
};
__decorateClass([
  (0, import_type_graphql4.Field)(() => import_type_graphql4.ID)
], User.prototype, "id", 2);
__decorateClass([
  (0, import_type_graphql4.Field)()
], User.prototype, "phone", 2);
__decorateClass([
  (0, import_type_graphql4.Field)()
], User.prototype, "firstName", 2);
__decorateClass([
  (0, import_type_graphql4.Field)({ nullable: true })
], User.prototype, "middleName", 2);
__decorateClass([
  (0, import_type_graphql4.Field)()
], User.prototype, "lastName", 2);
__decorateClass([
  (0, import_type_graphql4.Field)(() => [Employee])
], User.prototype, "employees", 2);
User = __decorateClass([
  (0, import_type_graphql4.ObjectType)()
], User);

// src/graphql/schemas/Employee.ts
(0, import_type_graphql5.registerEnumType)(import_client.EmployeeRole, {
  name: "EmployeeRole"
});
var Employee = class {
};
__decorateClass([
  (0, import_type_graphql5.Field)(() => import_type_graphql5.ID)
], Employee.prototype, "id", 2);
__decorateClass([
  (0, import_type_graphql5.Field)()
], Employee.prototype, "firstName", 2);
__decorateClass([
  (0, import_type_graphql5.Field)({ nullable: true })
], Employee.prototype, "middleName", 2);
__decorateClass([
  (0, import_type_graphql5.Field)()
], Employee.prototype, "lastName", 2);
__decorateClass([
  (0, import_type_graphql5.Field)()
], Employee.prototype, "jobTitle", 2);
__decorateClass([
  (0, import_type_graphql5.Field)(() => import_client.EmployeeRole)
], Employee.prototype, "role", 2);
__decorateClass([
  (0, import_type_graphql5.Field)(() => User, { nullable: true })
], Employee.prototype, "user", 2);
__decorateClass([
  (0, import_type_graphql5.Field)(() => Organization)
], Employee.prototype, "organization", 2);
__decorateClass([
  (0, import_type_graphql5.Field)(() => [Office])
], Employee.prototype, "offices", 2);
Employee = __decorateClass([
  (0, import_type_graphql5.ObjectType)()
], Employee);

// src/graphql/resolvers/Organization.ts
var prisma = new import_client2.PrismaClient();
var OrganizationResolver = class {
  offices(organization, ctx) {
    return ctx.prisma.organization.findUnique({
      where: {
        id: organization.id
      }
    }).offices();
  }
  async employees(organization, ctx) {
    return ctx.prisma.organization.findUnique({
      where: {
        id: organization.id
      }
    }).employees();
  }
  async allOrganizations() {
    return prisma.organization.findMany();
  }
};
__decorateClass([
  (0, import_type_graphql6.FieldResolver)(() => [Office]),
  __decorateParam(0, (0, import_type_graphql6.Root)()),
  __decorateParam(1, (0, import_type_graphql6.Ctx)())
], OrganizationResolver.prototype, "offices", 1);
__decorateClass([
  (0, import_type_graphql6.FieldResolver)(() => [Employee]),
  __decorateParam(0, (0, import_type_graphql6.Root)()),
  __decorateParam(1, (0, import_type_graphql6.Ctx)())
], OrganizationResolver.prototype, "employees", 1);
__decorateClass([
  (0, import_type_graphql6.Query)(() => [Organization], { nullable: true })
], OrganizationResolver.prototype, "allOrganizations", 1);
OrganizationResolver = __decorateClass([
  (0, import_type_graphql6.Resolver)(() => Organization)
], OrganizationResolver);

// src/graphql/resolvers/Address.ts
var import_type_graphql7 = require("type-graphql");
var AddressResolver = class {
};
AddressResolver = __decorateClass([
  (0, import_type_graphql7.Resolver)(() => Address)
], AddressResolver);

// src/graphql/resolvers/Office.ts
var import_type_graphql9 = require("type-graphql");

// src/graphql/schemas/EmployeeOnOffice.ts
var import_type_graphql8 = require("type-graphql");
var EmployeeOnOffice = class {
};
__decorateClass([
  (0, import_type_graphql8.Field)()
], EmployeeOnOffice.prototype, "createdBy", 2);
__decorateClass([
  (0, import_type_graphql8.Field)(() => import_type_graphql8.ID)
], EmployeeOnOffice.prototype, "employeeId", 2);
__decorateClass([
  (0, import_type_graphql8.Field)(() => import_type_graphql8.ID)
], EmployeeOnOffice.prototype, "officeId", 2);
EmployeeOnOffice = __decorateClass([
  (0, import_type_graphql8.ObjectType)()
], EmployeeOnOffice);

// src/graphql/resolvers/Office.ts
var OfficeResolver = class {
  address(office, ctx) {
    return ctx.prisma.office.findUnique({
      where: {
        id: office.id
      }
    }).address();
  }
  async employees(office, ctx) {
    return await ctx.prisma.office.findUnique({
      where: { id: office.id }
    }).employees();
  }
  organization(office, ctx) {
    return ctx.prisma.office.findUnique({
      where: {
        id: office.id
      }
    }).organization();
  }
};
__decorateClass([
  (0, import_type_graphql9.FieldResolver)(() => Address),
  __decorateParam(0, (0, import_type_graphql9.Root)()),
  __decorateParam(1, (0, import_type_graphql9.Ctx)())
], OfficeResolver.prototype, "address", 1);
__decorateClass([
  (0, import_type_graphql9.FieldResolver)(() => [EmployeeOnOffice]),
  __decorateParam(0, (0, import_type_graphql9.Root)()),
  __decorateParam(1, (0, import_type_graphql9.Ctx)())
], OfficeResolver.prototype, "employees", 1);
__decorateClass([
  (0, import_type_graphql9.FieldResolver)(() => Organization),
  __decorateParam(0, (0, import_type_graphql9.Root)()),
  __decorateParam(1, (0, import_type_graphql9.Ctx)())
], OfficeResolver.prototype, "organization", 1);
OfficeResolver = __decorateClass([
  (0, import_type_graphql9.Resolver)(() => Office)
], OfficeResolver);

// src/graphql/resolvers/Employee.ts
var import_type_graphql10 = require("type-graphql");
var EmployeeResolver = class {
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
  (0, import_type_graphql10.FieldResolver)(() => User),
  __decorateParam(0, (0, import_type_graphql10.Root)()),
  __decorateParam(1, (0, import_type_graphql10.Ctx)())
], EmployeeResolver.prototype, "user", 1);
__decorateClass([
  (0, import_type_graphql10.FieldResolver)(() => [Office]),
  __decorateParam(0, (0, import_type_graphql10.Root)()),
  __decorateParam(1, (0, import_type_graphql10.Ctx)())
], EmployeeResolver.prototype, "offices", 1);
__decorateClass([
  (0, import_type_graphql10.FieldResolver)(() => Organization),
  __decorateParam(0, (0, import_type_graphql10.Root)()),
  __decorateParam(1, (0, import_type_graphql10.Ctx)())
], EmployeeResolver.prototype, "organization", 1);
EmployeeResolver = __decorateClass([
  (0, import_type_graphql10.Resolver)(() => Employee)
], EmployeeResolver);

// src/graphql/resolvers/User.ts
var import_type_graphql11 = require("type-graphql");
var UserResolver = class {
  employees(user, ctx) {
    return ctx.prisma.user.findUnique({
      where: {
        id: user.id
      }
    }).employees();
  }
};
__decorateClass([
  (0, import_type_graphql11.FieldResolver)(() => [Employee]),
  __decorateParam(0, (0, import_type_graphql11.Root)()),
  __decorateParam(1, (0, import_type_graphql11.Ctx)())
], UserResolver.prototype, "employees", 1);
UserResolver = __decorateClass([
  (0, import_type_graphql11.Resolver)(() => User)
], UserResolver);

// src/graphql/resolvers/EmployeeOnOffice.ts
var import_type_graphql12 = require("type-graphql");
var EmployeeOnOfficeResolver = class {
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
  (0, import_type_graphql12.FieldResolver)(() => Employee),
  __decorateParam(0, (0, import_type_graphql12.Root)()),
  __decorateParam(1, (0, import_type_graphql12.Ctx)())
], EmployeeOnOfficeResolver.prototype, "employee", 1);
__decorateClass([
  (0, import_type_graphql12.FieldResolver)(() => Office),
  __decorateParam(0, (0, import_type_graphql12.Root)()),
  __decorateParam(1, (0, import_type_graphql12.Ctx)())
], EmployeeOnOfficeResolver.prototype, "office", 1);
EmployeeOnOfficeResolver = __decorateClass([
  (0, import_type_graphql12.Resolver)(() => EmployeeOnOffice)
], EmployeeOnOfficeResolver);

// src/app.ts
var import_schema = require("@graphql-tools/schema");
var import_apollo_server_express = require("apollo-server-express");
var import_http = require("http");
var import_client3 = require("@prisma/client");
var createApp = async () => {
  const app = (0, import_express.default)();
  app.use((0, import_cors.default)());
  app.use(import_express.default.json({ limit: "100mb" }));
  const { typeDefs, resolvers } = await (0, import_type_graphql13.buildTypeDefsAndResolvers)({
    resolvers: [
      OrganizationResolver,
      AddressResolver,
      OfficeResolver,
      EmployeeResolver,
      UserResolver,
      EmployeeOnOfficeResolver
    ]
  });
  const schema = (0, import_schema.makeExecutableSchema)({
    resolvers,
    typeDefs
  });
  const httpServer = (0, import_http.createServer)(app);
  const prisma3 = new import_client3.PrismaClient();
  const apolloServer = new import_apollo_server_express.ApolloServer({
    schema,
    context: async ({ req, res }) => {
      return {
        req,
        res,
        prisma: prisma3
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
var production = process.env.NODE_ENV === "production";
if (process.env.NODE_ENV === "development" || !process.env.NODE_ENV) {
  dotenv.config({ path: import_path.default.join(__dirname, "..", ".env.development") });
}
var prisma2 = new import_client4.PrismaClient();
async function main() {
  const port = process.env.PORT || 8080;
  const app = await app_default();
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
