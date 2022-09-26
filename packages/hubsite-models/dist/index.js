"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
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

// src/index.ts
var src_exports = {};
__export(src_exports, {
  AddressSchema: () => AddressSchema,
  EmployeeSchema: () => EmployeeSchema,
  EmployeeService: () => EmployeeService,
  EmployeesOnOfficesSchema: () => EmployeesOnOfficesSchema,
  EmployeesOnOfficesService: () => EmployeesOnOfficesService,
  OfficeSchema: () => OfficeSchema,
  OfficeService: () => OfficeService,
  OrganizationSchema: () => OrganizationSchema,
  OrganizationService: () => OrganizationService,
  UserSchema: () => UserSchema,
  UserService: () => UserService,
  prisma: () => prisma
});
module.exports = __toCommonJS(src_exports);

// src/prisma.ts
var prisma_exports = {};
__export(prisma_exports, {
  prisma: () => prisma
});
var import_client = require("@prisma/client");
__reExport(prisma_exports, require("@prisma/client"));
var prisma = global.prisma || new import_client.PrismaClient();
if (process.env.NODE_ENV !== "production")
  global.prisma = prisma;

// src/index.ts
__reExport(src_exports, prisma_exports, module.exports);

// src/organization/organization.schema.ts
var import_type_graphql = require("type-graphql");
var OrganizationSchema = class {
};
__decorateClass([
  (0, import_type_graphql.Field)(() => import_type_graphql.ID)
], OrganizationSchema.prototype, "id", 2);
__decorateClass([
  (0, import_type_graphql.Field)(() => String)
], OrganizationSchema.prototype, "name", 2);
__decorateClass([
  (0, import_type_graphql.Field)(() => Date)
], OrganizationSchema.prototype, "createdAt", 2);
__decorateClass([
  (0, import_type_graphql.Field)(() => Date)
], OrganizationSchema.prototype, "updatedAt", 2);
OrganizationSchema = __decorateClass([
  (0, import_type_graphql.ObjectType)()
], OrganizationSchema);

// src/organization/organization.service.ts
var import_typedi = require("typedi");
var OrganizationService = class {
  constructor(prisma2) {
    this.prisma = prisma2;
  }
  async getOffices(organization) {
    return this.prisma.organization.findUnique({
      where: {
        id: organization.id
      }
    }).offices();
  }
  async getEmployees(organization) {
    return this.prisma.organization.findUnique({
      where: {
        id: organization.id
      }
    }).employees();
  }
};
OrganizationService = __decorateClass([
  (0, import_typedi.Service)(),
  __decorateParam(0, (0, import_typedi.Inject)("PRISMA"))
], OrganizationService);

// src/office/office.schema.ts
var import_type_graphql2 = require("type-graphql");
var OfficeSchema = class {
};
__decorateClass([
  (0, import_type_graphql2.Field)(() => import_type_graphql2.ID)
], OfficeSchema.prototype, "id", 2);
__decorateClass([
  (0, import_type_graphql2.Field)(() => String)
], OfficeSchema.prototype, "name", 2);
__decorateClass([
  (0, import_type_graphql2.Field)(() => AddressSchema)
], OfficeSchema.prototype, "address", 2);
__decorateClass([
  (0, import_type_graphql2.Field)(() => Date)
], OfficeSchema.prototype, "createdAt", 2);
__decorateClass([
  (0, import_type_graphql2.Field)(() => Date)
], OfficeSchema.prototype, "updatedAt", 2);
OfficeSchema = __decorateClass([
  (0, import_type_graphql2.ObjectType)()
], OfficeSchema);

// src/office/office.service.ts
var import_typedi2 = require("typedi");
var OfficeService = class {
  constructor(prisma2) {
    this.prisma = prisma2;
  }
  async getAddress(office) {
    return this.prisma.office.findUnique({
      where: {
        id: office.id
      }
    }).address();
  }
  async getEmployees(office) {
    return this.prisma.office.findUnique({
      where: {
        id: office.id
      }
    }).employees();
  }
  async getOrganization(office) {
    return this.prisma.office.findUnique({
      where: {
        id: office.id
      }
    }).organization();
  }
};
OfficeService = __decorateClass([
  (0, import_typedi2.Service)(),
  __decorateParam(0, (0, import_typedi2.Inject)("PRISMA"))
], OfficeService);

// src/address/address.schema.ts
var import_type_graphql3 = require("type-graphql");
var AddressSchema = class {
};
__decorateClass([
  (0, import_type_graphql3.Field)()
], AddressSchema.prototype, "address", 2);
__decorateClass([
  (0, import_type_graphql3.Field)({ nullable: true })
], AddressSchema.prototype, "address2", 2);
__decorateClass([
  (0, import_type_graphql3.Field)()
], AddressSchema.prototype, "region", 2);
__decorateClass([
  (0, import_type_graphql3.Field)()
], AddressSchema.prototype, "country", 2);
__decorateClass([
  (0, import_type_graphql3.Field)()
], AddressSchema.prototype, "city", 2);
__decorateClass([
  (0, import_type_graphql3.Field)()
], AddressSchema.prototype, "postalCode", 2);
__decorateClass([
  (0, import_type_graphql3.Field)({ nullable: true })
], AddressSchema.prototype, "phone", 2);
AddressSchema = __decorateClass([
  (0, import_type_graphql3.ObjectType)()
], AddressSchema);

// src/employee/employee.schema.ts
var import_client2 = require("@prisma/client");
var import_type_graphql4 = require("type-graphql");
(0, import_type_graphql4.registerEnumType)(import_client2.EmployeeRole, {
  name: "EmployeeRole"
});
var EmployeeSchema = class {
};
__decorateClass([
  (0, import_type_graphql4.Field)(() => import_type_graphql4.ID)
], EmployeeSchema.prototype, "id", 2);
__decorateClass([
  (0, import_type_graphql4.Field)()
], EmployeeSchema.prototype, "firstName", 2);
__decorateClass([
  (0, import_type_graphql4.Field)({ nullable: true })
], EmployeeSchema.prototype, "middleName", 2);
__decorateClass([
  (0, import_type_graphql4.Field)()
], EmployeeSchema.prototype, "lastName", 2);
__decorateClass([
  (0, import_type_graphql4.Field)()
], EmployeeSchema.prototype, "jobTitle", 2);
__decorateClass([
  (0, import_type_graphql4.Field)(() => import_client2.EmployeeRole)
], EmployeeSchema.prototype, "role", 2);
__decorateClass([
  (0, import_type_graphql4.Field)(() => UserSchema, { nullable: true })
], EmployeeSchema.prototype, "user", 2);
__decorateClass([
  (0, import_type_graphql4.Field)(() => OrganizationSchema)
], EmployeeSchema.prototype, "organization", 2);
__decorateClass([
  (0, import_type_graphql4.Field)(() => [OfficeSchema])
], EmployeeSchema.prototype, "offices", 2);
EmployeeSchema = __decorateClass([
  (0, import_type_graphql4.ObjectType)()
], EmployeeSchema);

// src/employee/employee.service.ts
var import_typedi3 = require("typedi");
var EmployeeService = class {
  constructor(prisma2) {
    this.prisma = prisma2;
  }
};
EmployeeService = __decorateClass([
  (0, import_typedi3.Service)(),
  __decorateParam(0, (0, import_typedi3.Inject)("PRISMA"))
], EmployeeService);

// src/user/user.schema.ts
var import_type_graphql5 = require("type-graphql");
var UserSchema = class {
};
__decorateClass([
  (0, import_type_graphql5.Field)(() => import_type_graphql5.ID)
], UserSchema.prototype, "id", 2);
__decorateClass([
  (0, import_type_graphql5.Field)()
], UserSchema.prototype, "phone", 2);
__decorateClass([
  (0, import_type_graphql5.Field)()
], UserSchema.prototype, "firstName", 2);
__decorateClass([
  (0, import_type_graphql5.Field)({ nullable: true })
], UserSchema.prototype, "middleName", 2);
__decorateClass([
  (0, import_type_graphql5.Field)()
], UserSchema.prototype, "lastName", 2);
__decorateClass([
  (0, import_type_graphql5.Field)(() => [EmployeeSchema])
], UserSchema.prototype, "employees", 2);
UserSchema = __decorateClass([
  (0, import_type_graphql5.ObjectType)()
], UserSchema);

// src/user/user.service.ts
var import_typedi4 = require("typedi");
var UserService = class {
  constructor(prisma2) {
    this.prisma = prisma2;
  }
};
UserService = __decorateClass([
  (0, import_typedi4.Service)(),
  __decorateParam(0, (0, import_typedi4.Inject)("PRISMA"))
], UserService);

// src/employeesOnOffices/employeesOnOffices.schema.ts
var import_type_graphql6 = require("type-graphql");
var EmployeesOnOfficesSchema = class {
};
__decorateClass([
  (0, import_type_graphql6.Field)()
], EmployeesOnOfficesSchema.prototype, "createdBy", 2);
__decorateClass([
  (0, import_type_graphql6.Field)(() => import_type_graphql6.ID)
], EmployeesOnOfficesSchema.prototype, "employeeId", 2);
__decorateClass([
  (0, import_type_graphql6.Field)(() => import_type_graphql6.ID)
], EmployeesOnOfficesSchema.prototype, "officeId", 2);
EmployeesOnOfficesSchema = __decorateClass([
  (0, import_type_graphql6.ObjectType)()
], EmployeesOnOfficesSchema);

// src/employeesOnOffices/employeesOnOffices.service.ts
var import_typedi5 = require("typedi");
var EmployeesOnOfficesService = class {
  constructor(prisma2) {
    this.prisma = prisma2;
  }
};
EmployeesOnOfficesService = __decorateClass([
  (0, import_typedi5.Service)(),
  __decorateParam(0, (0, import_typedi5.Inject)("PRISMA"))
], EmployeesOnOfficesService);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AddressSchema,
  EmployeeSchema,
  EmployeeService,
  EmployeesOnOfficesSchema,
  EmployeesOnOfficesService,
  OfficeSchema,
  OfficeService,
  OrganizationSchema,
  OrganizationService,
  UserSchema,
  UserService,
  prisma
});
