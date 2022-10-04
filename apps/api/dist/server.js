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
  user(employee) {
    return this.employeeService.getUser(employee.id);
  }
  offices(employee) {
    return this.employeeService.getOffices(employee.id);
  }
  organization(employee) {
    return this.employeeService.getOrganization(employee.id);
  }
  currentEmployee(ctx) {
    return ctx.employee;
  }
  employeeLogin(id, ctx) {
    return this.employeeService.login(id, ctx.req.headers.authorization);
  }
};
__decorateClass([
  (0, import_type_graphql2.FieldResolver)(() => import_hubsite_models2.UserSchema),
  __decorateParam(0, (0, import_type_graphql2.Root)())
], EmployeeResolver.prototype, "user", 1);
__decorateClass([
  (0, import_type_graphql2.FieldResolver)(() => [import_hubsite_models2.EmployeesOnOfficesSchema]),
  __decorateParam(0, (0, import_type_graphql2.Root)())
], EmployeeResolver.prototype, "offices", 1);
__decorateClass([
  (0, import_type_graphql2.FieldResolver)(() => import_hubsite_models2.OrganizationSchema),
  __decorateParam(0, (0, import_type_graphql2.Root)())
], EmployeeResolver.prototype, "organization", 1);
__decorateClass([
  (0, import_type_graphql2.Authorized)(),
  (0, import_type_graphql2.Query)(() => import_hubsite_models2.EmployeeSchema),
  __decorateParam(0, (0, import_type_graphql2.Ctx)())
], EmployeeResolver.prototype, "currentEmployee", 1);
__decorateClass([
  (0, import_type_graphql2.Authorized)(["USER"]),
  (0, import_type_graphql2.Mutation)(() => String),
  __decorateParam(0, (0, import_type_graphql2.Arg)("id")),
  __decorateParam(1, (0, import_type_graphql2.Ctx)())
], EmployeeResolver.prototype, "employeeLogin", 1);
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
  employee(employeeOnOffice) {
    return this.employeesOnOfficesService.getEmployee(employeeOnOffice);
  }
  office(employeeOnOffice) {
    return this.employeesOnOfficesService.getOffice(employeeOnOffice);
  }
};
__decorateClass([
  (0, import_type_graphql3.FieldResolver)(() => import_hubsite_models3.EmployeeSchema),
  __decorateParam(0, (0, import_type_graphql3.Root)())
], EmployeesOnOfficesResolver.prototype, "employee", 1);
__decorateClass([
  (0, import_type_graphql3.FieldResolver)(() => import_hubsite_models3.OfficeSchema),
  __decorateParam(0, (0, import_type_graphql3.Root)())
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
  async organization(id) {
    return this.organizationService.getById(id);
  }
  async organizationCreate(organizationData, officesData, employeeData, userData) {
    return this.organizationService.create(
      organizationData,
      officesData,
      employeeData,
      userData
    );
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
  (0, import_type_graphql5.Query)(() => import_hubsite_models5.OrganizationSchema, { nullable: true }),
  __decorateParam(0, (0, import_type_graphql5.Arg)("id"))
], OrganizationResolver.prototype, "organization", 1);
__decorateClass([
  (0, import_type_graphql5.Mutation)(() => import_hubsite_models5.OrganizationSchema),
  __decorateParam(0, (0, import_type_graphql5.Arg)("organizationData", () => import_hubsite_models5.OrganizationCreateInput)),
  __decorateParam(1, (0, import_type_graphql5.Arg)("officesData", () => [import_hubsite_models5.OfficeCreateInput])),
  __decorateParam(2, (0, import_type_graphql5.Arg)("employeeData", () => import_hubsite_models5.EmployeeCreateInput)),
  __decorateParam(3, (0, import_type_graphql5.Arg)("userData", () => import_hubsite_models5.UserCreateInput))
], OrganizationResolver.prototype, "organizationCreate", 1);
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
  employees(user) {
    return this.userService.getEmployees(user);
  }
  currentUser(ctx) {
    return ctx.user;
  }
  userLoginPhone(phone) {
    return this.userService.temporaryPhoneLogin(phone);
  }
  userLoginCode(code, ctx) {
    return this.userService.codeLogin(code, ctx.loginRequest);
  }
};
__decorateClass([
  (0, import_type_graphql6.FieldResolver)(() => [import_hubsite_models6.EmployeeSchema]),
  __decorateParam(0, (0, import_type_graphql6.Root)())
], UserResolver.prototype, "employees", 1);
__decorateClass([
  (0, import_type_graphql6.Query)(() => import_hubsite_models6.UserSchema),
  __decorateParam(0, (0, import_type_graphql6.Ctx)())
], UserResolver.prototype, "currentUser", 1);
__decorateClass([
  (0, import_type_graphql6.Mutation)(() => String),
  __decorateParam(0, (0, import_type_graphql6.Arg)("phone"))
], UserResolver.prototype, "userLoginPhone", 1);
__decorateClass([
  (0, import_type_graphql6.Authorized)(["TEMP"]),
  (0, import_type_graphql6.Mutation)(() => String),
  __decorateParam(0, (0, import_type_graphql6.Arg)("code")),
  __decorateParam(1, (0, import_type_graphql6.Ctx)())
], UserResolver.prototype, "userLoginCode", 1);
UserResolver = __decorateClass([
  (0, import_typedi5.Service)(),
  (0, import_type_graphql6.Resolver)(() => import_hubsite_models6.UserSchema)
], UserResolver);

// src/app.ts
var import_schema = require("@graphql-tools/schema");
var import_apollo_server_express = require("apollo-server-express");
var import_http = require("http");
var import_typedi6 = require("typedi");
var import_hubsite_models9 = require("hubsite-models");

// src/graphql/utils/authChecker.ts
var import_hubsite_models7 = require("hubsite-models");
var authChecker = async ({ context }, roles) => {
  if (roles.length === 0) {
    return !!context.employee && !!context.user;
  }
  if (roles.includes("USER") && !!context.user)
    return true;
  if (roles.includes("TEMP") && !!context.loginRequest)
    return true;
  if (!!context.employee && !!context.user) {
    const rolesArray = Object.values(import_hubsite_models7.EmployeeRole);
    for (const role of rolesArray) {
      if (roles.includes(role) && context.employee.role === role) {
        return true;
      }
    }
  }
  return false;
};
var authChecker_default = authChecker;

// src/graphql/utils/generateContext.ts
var import_hubsite_models8 = require("hubsite-models");

// ../../packages/api-utils/src/jwt.ts
var import_jsonwebtoken = __toESM(require("jsonwebtoken"));
var ErrorMessage = "Could not find secret key, please contact support";
var sign = (payload, options) => {
  if (!process.env.JWT_SECRET)
    throw new Error(ErrorMessage);
  return import_jsonwebtoken.default.sign(payload, process.env.JWT_SECRET, options);
};
var decode = (token, options, verifyOptions) => {
  try {
    if (!process.env.JWT_SECRET)
      throw new Error(ErrorMessage);
    import_jsonwebtoken.default.verify(token, process.env.JWT_SECRET, verifyOptions);
  } catch (error) {
    throw new Error("Permission denied");
  }
  return import_jsonwebtoken.default.decode(token, options);
};
var jsonwt = {
  sign,
  decode
};

// src/graphql/utils/generateContext.ts
var generateContext = async ({ req, res }) => {
  const token = req.headers.authorization;
  let user = null;
  let employee = null;
  let loginRequest = null;
  if (token) {
    const decoded = jsonwt.decode(token);
    if (decoded.userId) {
      user = await import_hubsite_models8.prisma.user.findUnique({
        where: {
          id: decoded.userId
        }
      });
      if (decoded.employeeId) {
        employee = await import_hubsite_models8.prisma.employee.findUnique({
          where: {
            id: decoded.employeeId
          }
        });
      }
    } else if (decoded.loginRequestId) {
      loginRequest = await import_hubsite_models8.prisma.loginRequest.findUnique({
        where: {
          id: decoded.loginRequestId
        }
      });
    }
  }
  return {
    req,
    res,
    user,
    employee,
    loginRequest
  };
};
var generateContext_default = generateContext;

// src/app.ts
import_typedi6.Container.set({ id: "PRISMA", factory: () => import_hubsite_models9.prisma });
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
    container: import_typedi6.Container,
    authChecker: authChecker_default
  });
  const schema = (0, import_schema.makeExecutableSchema)({
    resolvers,
    typeDefs
  });
  const httpServer = (0, import_http.createServer)(app);
  const apolloServer = new import_apollo_server_express.ApolloServer({
    schema,
    context: generateContext_default
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
var import_hubsite_models10 = require("hubsite-models");
var production = process.env.NODE_ENV === "production";
if (process.env.NODE_ENV === "development" || !process.env.NODE_ENV) {
  dotenv.config({ path: import_path.default.join(__dirname, "..", ".env.development") });
}
async function main() {
  const port = process.env.PORT || 8080;
  const app = await app_default();
  const server = app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });
  server.setTimeout(3 * 60 * 1e3);
}
main().then(async () => {
  await import_hubsite_models10.prisma.$disconnect();
}).catch(async (error) => {
  console.error(error);
  await import_hubsite_models10.prisma.$disconnect();
  process.exit(1);
});
