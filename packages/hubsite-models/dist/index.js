"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
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

// ../../node_modules/uuid/dist/rng.js
var require_rng = __commonJS({
  "../../node_modules/uuid/dist/rng.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = rng;
    var _crypto = _interopRequireDefault(require("crypto"));
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var rnds8Pool = new Uint8Array(256);
    var poolPtr = rnds8Pool.length;
    function rng() {
      if (poolPtr > rnds8Pool.length - 16) {
        _crypto.default.randomFillSync(rnds8Pool);
        poolPtr = 0;
      }
      return rnds8Pool.slice(poolPtr, poolPtr += 16);
    }
  }
});

// ../../node_modules/uuid/dist/regex.js
var require_regex = __commonJS({
  "../../node_modules/uuid/dist/regex.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    exports.default = _default;
  }
});

// ../../node_modules/uuid/dist/validate.js
var require_validate = __commonJS({
  "../../node_modules/uuid/dist/validate.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _regex = _interopRequireDefault(require_regex());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function validate2(uuid2) {
      return typeof uuid2 === "string" && _regex.default.test(uuid2);
    }
    var _default = validate2;
    exports.default = _default;
  }
});

// ../../node_modules/uuid/dist/stringify.js
var require_stringify = __commonJS({
  "../../node_modules/uuid/dist/stringify.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _validate = _interopRequireDefault(require_validate());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var byteToHex = [];
    for (let i = 0; i < 256; ++i) {
      byteToHex.push((i + 256).toString(16).substr(1));
    }
    function stringify2(arr, offset = 0) {
      const uuid2 = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
      if (!(0, _validate.default)(uuid2)) {
        throw TypeError("Stringified UUID is invalid");
      }
      return uuid2;
    }
    var _default = stringify2;
    exports.default = _default;
  }
});

// ../../node_modules/uuid/dist/v1.js
var require_v1 = __commonJS({
  "../../node_modules/uuid/dist/v1.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rng = _interopRequireDefault(require_rng());
    var _stringify = _interopRequireDefault(require_stringify());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var _nodeId;
    var _clockseq;
    var _lastMSecs = 0;
    var _lastNSecs = 0;
    function v12(options, buf, offset) {
      let i = buf && offset || 0;
      const b = buf || new Array(16);
      options = options || {};
      let node = options.node || _nodeId;
      let clockseq = options.clockseq !== void 0 ? options.clockseq : _clockseq;
      if (node == null || clockseq == null) {
        const seedBytes = options.random || (options.rng || _rng.default)();
        if (node == null) {
          node = _nodeId = [seedBytes[0] | 1, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
        }
        if (clockseq == null) {
          clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 16383;
        }
      }
      let msecs = options.msecs !== void 0 ? options.msecs : Date.now();
      let nsecs = options.nsecs !== void 0 ? options.nsecs : _lastNSecs + 1;
      const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 1e4;
      if (dt < 0 && options.clockseq === void 0) {
        clockseq = clockseq + 1 & 16383;
      }
      if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === void 0) {
        nsecs = 0;
      }
      if (nsecs >= 1e4) {
        throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
      }
      _lastMSecs = msecs;
      _lastNSecs = nsecs;
      _clockseq = clockseq;
      msecs += 122192928e5;
      const tl = ((msecs & 268435455) * 1e4 + nsecs) % 4294967296;
      b[i++] = tl >>> 24 & 255;
      b[i++] = tl >>> 16 & 255;
      b[i++] = tl >>> 8 & 255;
      b[i++] = tl & 255;
      const tmh = msecs / 4294967296 * 1e4 & 268435455;
      b[i++] = tmh >>> 8 & 255;
      b[i++] = tmh & 255;
      b[i++] = tmh >>> 24 & 15 | 16;
      b[i++] = tmh >>> 16 & 255;
      b[i++] = clockseq >>> 8 | 128;
      b[i++] = clockseq & 255;
      for (let n = 0; n < 6; ++n) {
        b[i + n] = node[n];
      }
      return buf || (0, _stringify.default)(b);
    }
    var _default = v12;
    exports.default = _default;
  }
});

// ../../node_modules/uuid/dist/parse.js
var require_parse = __commonJS({
  "../../node_modules/uuid/dist/parse.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _validate = _interopRequireDefault(require_validate());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function parse2(uuid2) {
      if (!(0, _validate.default)(uuid2)) {
        throw TypeError("Invalid UUID");
      }
      let v;
      const arr = new Uint8Array(16);
      arr[0] = (v = parseInt(uuid2.slice(0, 8), 16)) >>> 24;
      arr[1] = v >>> 16 & 255;
      arr[2] = v >>> 8 & 255;
      arr[3] = v & 255;
      arr[4] = (v = parseInt(uuid2.slice(9, 13), 16)) >>> 8;
      arr[5] = v & 255;
      arr[6] = (v = parseInt(uuid2.slice(14, 18), 16)) >>> 8;
      arr[7] = v & 255;
      arr[8] = (v = parseInt(uuid2.slice(19, 23), 16)) >>> 8;
      arr[9] = v & 255;
      arr[10] = (v = parseInt(uuid2.slice(24, 36), 16)) / 1099511627776 & 255;
      arr[11] = v / 4294967296 & 255;
      arr[12] = v >>> 24 & 255;
      arr[13] = v >>> 16 & 255;
      arr[14] = v >>> 8 & 255;
      arr[15] = v & 255;
      return arr;
    }
    var _default = parse2;
    exports.default = _default;
  }
});

// ../../node_modules/uuid/dist/v35.js
var require_v35 = __commonJS({
  "../../node_modules/uuid/dist/v35.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = _default;
    exports.URL = exports.DNS = void 0;
    var _stringify = _interopRequireDefault(require_stringify());
    var _parse = _interopRequireDefault(require_parse());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function stringToBytes(str) {
      str = unescape(encodeURIComponent(str));
      const bytes = [];
      for (let i = 0; i < str.length; ++i) {
        bytes.push(str.charCodeAt(i));
      }
      return bytes;
    }
    var DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
    exports.DNS = DNS;
    var URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
    exports.URL = URL;
    function _default(name, version2, hashfunc) {
      function generateUUID(value, namespace, buf, offset) {
        if (typeof value === "string") {
          value = stringToBytes(value);
        }
        if (typeof namespace === "string") {
          namespace = (0, _parse.default)(namespace);
        }
        if (namespace.length !== 16) {
          throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        }
        let bytes = new Uint8Array(16 + value.length);
        bytes.set(namespace);
        bytes.set(value, namespace.length);
        bytes = hashfunc(bytes);
        bytes[6] = bytes[6] & 15 | version2;
        bytes[8] = bytes[8] & 63 | 128;
        if (buf) {
          offset = offset || 0;
          for (let i = 0; i < 16; ++i) {
            buf[offset + i] = bytes[i];
          }
          return buf;
        }
        return (0, _stringify.default)(bytes);
      }
      try {
        generateUUID.name = name;
      } catch (err) {
      }
      generateUUID.DNS = DNS;
      generateUUID.URL = URL;
      return generateUUID;
    }
  }
});

// ../../node_modules/uuid/dist/md5.js
var require_md5 = __commonJS({
  "../../node_modules/uuid/dist/md5.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _crypto = _interopRequireDefault(require("crypto"));
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function md5(bytes) {
      if (Array.isArray(bytes)) {
        bytes = Buffer.from(bytes);
      } else if (typeof bytes === "string") {
        bytes = Buffer.from(bytes, "utf8");
      }
      return _crypto.default.createHash("md5").update(bytes).digest();
    }
    var _default = md5;
    exports.default = _default;
  }
});

// ../../node_modules/uuid/dist/v3.js
var require_v3 = __commonJS({
  "../../node_modules/uuid/dist/v3.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _v = _interopRequireDefault(require_v35());
    var _md = _interopRequireDefault(require_md5());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var v32 = (0, _v.default)("v3", 48, _md.default);
    var _default = v32;
    exports.default = _default;
  }
});

// ../../node_modules/uuid/dist/v4.js
var require_v4 = __commonJS({
  "../../node_modules/uuid/dist/v4.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rng = _interopRequireDefault(require_rng());
    var _stringify = _interopRequireDefault(require_stringify());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function v42(options, buf, offset) {
      options = options || {};
      const rnds = options.random || (options.rng || _rng.default)();
      rnds[6] = rnds[6] & 15 | 64;
      rnds[8] = rnds[8] & 63 | 128;
      if (buf) {
        offset = offset || 0;
        for (let i = 0; i < 16; ++i) {
          buf[offset + i] = rnds[i];
        }
        return buf;
      }
      return (0, _stringify.default)(rnds);
    }
    var _default = v42;
    exports.default = _default;
  }
});

// ../../node_modules/uuid/dist/sha1.js
var require_sha1 = __commonJS({
  "../../node_modules/uuid/dist/sha1.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _crypto = _interopRequireDefault(require("crypto"));
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function sha1(bytes) {
      if (Array.isArray(bytes)) {
        bytes = Buffer.from(bytes);
      } else if (typeof bytes === "string") {
        bytes = Buffer.from(bytes, "utf8");
      }
      return _crypto.default.createHash("sha1").update(bytes).digest();
    }
    var _default = sha1;
    exports.default = _default;
  }
});

// ../../node_modules/uuid/dist/v5.js
var require_v5 = __commonJS({
  "../../node_modules/uuid/dist/v5.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _v = _interopRequireDefault(require_v35());
    var _sha = _interopRequireDefault(require_sha1());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var v52 = (0, _v.default)("v5", 80, _sha.default);
    var _default = v52;
    exports.default = _default;
  }
});

// ../../node_modules/uuid/dist/nil.js
var require_nil = __commonJS({
  "../../node_modules/uuid/dist/nil.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _default = "00000000-0000-0000-0000-000000000000";
    exports.default = _default;
  }
});

// ../../node_modules/uuid/dist/version.js
var require_version = __commonJS({
  "../../node_modules/uuid/dist/version.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _validate = _interopRequireDefault(require_validate());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function version2(uuid2) {
      if (!(0, _validate.default)(uuid2)) {
        throw TypeError("Invalid UUID");
      }
      return parseInt(uuid2.substr(14, 1), 16);
    }
    var _default = version2;
    exports.default = _default;
  }
});

// ../../node_modules/uuid/dist/index.js
var require_dist = __commonJS({
  "../../node_modules/uuid/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "v1", {
      enumerable: true,
      get: function() {
        return _v.default;
      }
    });
    Object.defineProperty(exports, "v3", {
      enumerable: true,
      get: function() {
        return _v2.default;
      }
    });
    Object.defineProperty(exports, "v4", {
      enumerable: true,
      get: function() {
        return _v3.default;
      }
    });
    Object.defineProperty(exports, "v5", {
      enumerable: true,
      get: function() {
        return _v4.default;
      }
    });
    Object.defineProperty(exports, "NIL", {
      enumerable: true,
      get: function() {
        return _nil.default;
      }
    });
    Object.defineProperty(exports, "version", {
      enumerable: true,
      get: function() {
        return _version.default;
      }
    });
    Object.defineProperty(exports, "validate", {
      enumerable: true,
      get: function() {
        return _validate.default;
      }
    });
    Object.defineProperty(exports, "stringify", {
      enumerable: true,
      get: function() {
        return _stringify.default;
      }
    });
    Object.defineProperty(exports, "parse", {
      enumerable: true,
      get: function() {
        return _parse.default;
      }
    });
    var _v = _interopRequireDefault(require_v1());
    var _v2 = _interopRequireDefault(require_v3());
    var _v3 = _interopRequireDefault(require_v4());
    var _v4 = _interopRequireDefault(require_v5());
    var _nil = _interopRequireDefault(require_nil());
    var _version = _interopRequireDefault(require_version());
    var _validate = _interopRequireDefault(require_validate());
    var _stringify = _interopRequireDefault(require_stringify());
    var _parse = _interopRequireDefault(require_parse());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  AddressCreateInput: () => AddressCreateInput,
  AddressSchema: () => AddressSchema,
  EmployeeCreateInput: () => EmployeeCreateInput,
  EmployeeSchema: () => EmployeeSchema,
  EmployeeService: () => EmployeeService,
  EmployeesOnOfficesSchema: () => EmployeesOnOfficesSchema,
  EmployeesOnOfficesService: () => EmployeesOnOfficesService,
  OfficeCreateInput: () => OfficeCreateInput,
  OfficeSchema: () => OfficeSchema,
  OfficeService: () => OfficeService,
  OrganizationCreateInput: () => OrganizationCreateInput,
  OrganizationSchema: () => OrganizationSchema,
  OrganizationService: () => OrganizationService,
  UserCreateInput: () => UserCreateInput,
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

// ../../node_modules/uuid/wrapper.mjs
var import_dist = __toESM(require_dist(), 1);
var v1 = import_dist.default.v1;
var v3 = import_dist.default.v3;
var v4 = import_dist.default.v4;
var v5 = import_dist.default.v5;
var NIL = import_dist.default.NIL;
var version = import_dist.default.version;
var validate = import_dist.default.validate;
var stringify = import_dist.default.stringify;
var parse = import_dist.default.parse;

// src/organization/organization.service.ts
var OrganizationService = class {
  constructor(prisma2) {
    this.prisma = prisma2;
  }
  async getById(id) {
    return this.prisma.organization.findUnique({
      where: {
        id
      }
    });
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
  async create(organizationData, officesData, employeeData, userData) {
    const organizationId = v4();
    const employeeId = v4();
    const organization = await this.prisma.organization.create({
      data: {
        id: organizationId,
        ...organizationData,
        offices: {
          create: officesData.map((data) => {
            const { address, ...rest } = data;
            return {
              ...rest,
              address: {
                create: {
                  ...address
                }
              },
              employees: {
                create: {
                  createdBy: `${employeeData.firstName}${employeeData.middleName ? ` ${employeeData.middleName}` : ""} ${employeeData.lastName}`,
                  employee: {
                    connect: {
                      id: employeeId
                    }
                  }
                }
              }
            };
          })
        },
        employees: {
          create: {
            id: employeeId,
            ...employeeData,
            user: {
              create: {
                ...userData
              }
            }
          }
        }
      }
    });
    return organization;
  }
};
OrganizationService = __decorateClass([
  (0, import_typedi.Service)(),
  __decorateParam(0, (0, import_typedi.Inject)("PRISMA"))
], OrganizationService);

// src/organization/organization.input.ts
var import_type_graphql2 = require("type-graphql");
var OrganizationCreateInput = class {
};
__decorateClass([
  (0, import_type_graphql2.Field)()
], OrganizationCreateInput.prototype, "name", 2);
OrganizationCreateInput = __decorateClass([
  (0, import_type_graphql2.InputType)()
], OrganizationCreateInput);

// src/office/office.schema.ts
var import_type_graphql3 = require("type-graphql");
var OfficeSchema = class {
};
__decorateClass([
  (0, import_type_graphql3.Field)(() => import_type_graphql3.ID)
], OfficeSchema.prototype, "id", 2);
__decorateClass([
  (0, import_type_graphql3.Field)(() => String)
], OfficeSchema.prototype, "name", 2);
__decorateClass([
  (0, import_type_graphql3.Field)(() => AddressSchema)
], OfficeSchema.prototype, "address", 2);
__decorateClass([
  (0, import_type_graphql3.Field)(() => Date)
], OfficeSchema.prototype, "createdAt", 2);
__decorateClass([
  (0, import_type_graphql3.Field)(() => Date)
], OfficeSchema.prototype, "updatedAt", 2);
OfficeSchema = __decorateClass([
  (0, import_type_graphql3.ObjectType)()
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

// src/office/office.input.ts
var import_type_graphql6 = require("type-graphql");

// src/address/address.schema.ts
var import_type_graphql4 = require("type-graphql");
var AddressSchema = class {
};
__decorateClass([
  (0, import_type_graphql4.Field)()
], AddressSchema.prototype, "address", 2);
__decorateClass([
  (0, import_type_graphql4.Field)({ nullable: true })
], AddressSchema.prototype, "address2", 2);
__decorateClass([
  (0, import_type_graphql4.Field)()
], AddressSchema.prototype, "region", 2);
__decorateClass([
  (0, import_type_graphql4.Field)()
], AddressSchema.prototype, "country", 2);
__decorateClass([
  (0, import_type_graphql4.Field)()
], AddressSchema.prototype, "city", 2);
__decorateClass([
  (0, import_type_graphql4.Field)()
], AddressSchema.prototype, "postalCode", 2);
__decorateClass([
  (0, import_type_graphql4.Field)({ nullable: true })
], AddressSchema.prototype, "phone", 2);
AddressSchema = __decorateClass([
  (0, import_type_graphql4.ObjectType)()
], AddressSchema);

// src/address/address.input.ts
var import_type_graphql5 = require("type-graphql");
var AddressCreateInput = class {
};
__decorateClass([
  (0, import_type_graphql5.Field)()
], AddressCreateInput.prototype, "address", 2);
__decorateClass([
  (0, import_type_graphql5.Field)({ nullable: true })
], AddressCreateInput.prototype, "address2", 2);
__decorateClass([
  (0, import_type_graphql5.Field)()
], AddressCreateInput.prototype, "region", 2);
__decorateClass([
  (0, import_type_graphql5.Field)()
], AddressCreateInput.prototype, "country", 2);
__decorateClass([
  (0, import_type_graphql5.Field)()
], AddressCreateInput.prototype, "city", 2);
__decorateClass([
  (0, import_type_graphql5.Field)()
], AddressCreateInput.prototype, "postalCode", 2);
__decorateClass([
  (0, import_type_graphql5.Field)({ nullable: true })
], AddressCreateInput.prototype, "phone", 2);
AddressCreateInput = __decorateClass([
  (0, import_type_graphql5.InputType)()
], AddressCreateInput);

// src/office/office.input.ts
var OfficeCreateInput = class {
};
__decorateClass([
  (0, import_type_graphql6.Field)()
], OfficeCreateInput.prototype, "name", 2);
__decorateClass([
  (0, import_type_graphql6.Field)(() => AddressCreateInput)
], OfficeCreateInput.prototype, "address", 2);
OfficeCreateInput = __decorateClass([
  (0, import_type_graphql6.InputType)()
], OfficeCreateInput);

// src/employee/employee.schema.ts
var import_client2 = require("@prisma/client");
var import_type_graphql7 = require("type-graphql");
(0, import_type_graphql7.registerEnumType)(import_client2.EmployeeRole, {
  name: "EmployeeRole"
});
var EmployeeSchema = class {
};
__decorateClass([
  (0, import_type_graphql7.Field)(() => import_type_graphql7.ID)
], EmployeeSchema.prototype, "id", 2);
__decorateClass([
  (0, import_type_graphql7.Field)()
], EmployeeSchema.prototype, "firstName", 2);
__decorateClass([
  (0, import_type_graphql7.Field)({ nullable: true })
], EmployeeSchema.prototype, "middleName", 2);
__decorateClass([
  (0, import_type_graphql7.Field)()
], EmployeeSchema.prototype, "lastName", 2);
__decorateClass([
  (0, import_type_graphql7.Field)()
], EmployeeSchema.prototype, "jobTitle", 2);
__decorateClass([
  (0, import_type_graphql7.Field)(() => import_client2.EmployeeRole)
], EmployeeSchema.prototype, "role", 2);
EmployeeSchema = __decorateClass([
  (0, import_type_graphql7.ObjectType)()
], EmployeeSchema);

// src/employee/employee.service.ts
var import_typedi3 = require("typedi");
var import_api_utils = require("api-utils");
var EmployeeService = class {
  constructor(prisma2) {
    this.prisma = prisma2;
  }
  async getById(id) {
    return this.prisma.employee.findUnique({
      where: {
        id
      }
    });
  }
  async getUser(id) {
    return this.prisma.employee.findUnique({
      where: {
        id
      }
    }).user();
  }
  async getOrganization(id) {
    return this.prisma.employee.findUnique({
      where: {
        id
      }
    }).organization();
  }
  async getOffices(id) {
    return this.prisma.employee.findUnique({
      where: {
        id
      }
    }).offices();
  }
  async login(id, currentToken) {
    if (!currentToken)
      throw new Error("You do not have permission to do this");
    const decoded = import_api_utils.jsonwt.decode(currentToken);
    const userId = decoded.userId;
    if (!userId)
      throw new Error("You do not have permission to do this");
    const user = await this.getUser(id);
    if (!user)
      throw new Error("Unable to connect to this employee");
    if (user.id !== userId)
      throw new Error("You do not have permission to connect to this user");
    const employee = await this.getById(id);
    if (!employee)
      throw new Error("Unable to find selected employee");
    return import_api_utils.jsonwt.sign(
      {
        userId,
        employeeId: employee.id
      },
      {
        expiresIn: "4 weeks"
      }
    );
  }
};
EmployeeService = __decorateClass([
  (0, import_typedi3.Service)(),
  __decorateParam(0, (0, import_typedi3.Inject)("PRISMA"))
], EmployeeService);

// src/employee/employee.input.ts
var import_client3 = require("@prisma/client");
var import_type_graphql8 = require("type-graphql");
var EmployeeCreateInput = class {
};
__decorateClass([
  (0, import_type_graphql8.Field)()
], EmployeeCreateInput.prototype, "firstName", 2);
__decorateClass([
  (0, import_type_graphql8.Field)({ nullable: true })
], EmployeeCreateInput.prototype, "middleName", 2);
__decorateClass([
  (0, import_type_graphql8.Field)()
], EmployeeCreateInput.prototype, "lastName", 2);
__decorateClass([
  (0, import_type_graphql8.Field)()
], EmployeeCreateInput.prototype, "jobTitle", 2);
__decorateClass([
  (0, import_type_graphql8.Field)(() => import_client3.EmployeeRole)
], EmployeeCreateInput.prototype, "role", 2);
EmployeeCreateInput = __decorateClass([
  (0, import_type_graphql8.InputType)()
], EmployeeCreateInput);

// src/user/user.schema.ts
var import_type_graphql9 = require("type-graphql");
var UserSchema = class {
};
__decorateClass([
  (0, import_type_graphql9.Field)(() => import_type_graphql9.ID)
], UserSchema.prototype, "id", 2);
__decorateClass([
  (0, import_type_graphql9.Field)()
], UserSchema.prototype, "phone", 2);
__decorateClass([
  (0, import_type_graphql9.Field)()
], UserSchema.prototype, "firstName", 2);
__decorateClass([
  (0, import_type_graphql9.Field)({ nullable: true })
], UserSchema.prototype, "middleName", 2);
__decorateClass([
  (0, import_type_graphql9.Field)()
], UserSchema.prototype, "lastName", 2);
__decorateClass([
  (0, import_type_graphql9.Field)(() => [EmployeeSchema])
], UserSchema.prototype, "employees", 2);
__decorateClass([
  (0, import_type_graphql9.Field)()
], UserSchema.prototype, "createdAt", 2);
__decorateClass([
  (0, import_type_graphql9.Field)()
], UserSchema.prototype, "updatedAt", 2);
UserSchema = __decorateClass([
  (0, import_type_graphql9.ObjectType)()
], UserSchema);

// src/user/user.service.ts
var import_api_utils2 = require("api-utils");
var import_typedi4 = require("typedi");
var UserService = class {
  constructor(prisma2, loginRequestService) {
    this.prisma = prisma2;
    this.loginRequestService = loginRequestService;
  }
  async getFromPhone(phone) {
    return this.prisma.user.findUnique({
      where: {
        phone
      }
    });
  }
  async getFromJWT(token) {
    if (token) {
      const decoded = import_api_utils2.jsonwt.decode(token);
      const userId = decoded.userId;
      if (userId) {
        const user = await this.prisma.user.findUnique({
          where: {
            id: userId
          }
        });
        if (!user)
          return null;
        return user;
      }
    }
    return null;
  }
  async getEmployees(user) {
    return this.prisma.user.findUnique({
      where: {
        id: user.id
      }
    }).employees();
  }
  async createJwt(user) {
    const token = import_api_utils2.jsonwt.sign(
      {
        userId: user.id
      },
      {
        expiresIn: "4 weeks"
      }
    );
    return token;
  }
  async temporaryPhoneLogin(phone) {
    const user = await this.getFromPhone(phone);
    if (user) {
      const loginRequest = await this.loginRequestService.create(user);
      const token = import_api_utils2.jsonwt.sign(
        {
          loginRequestId: loginRequest.id
        },
        {
          expiresIn: `${global.tempAuthMinutes}m`
        }
      );
      return token;
    } else {
      throw new Error("Unable to find a user with that number");
    }
  }
  async codeLogin(code, loginRequest) {
    if (!loginRequest)
      throw new Error("Could not authorize request");
    if (loginRequest.expiresAt.getTime() < new Date().getTime())
      throw new Error("Code has expired, please try again");
    if (code !== loginRequest.code)
      throw new Error("Invalid code");
    const user = await this.loginRequestService.getUser(loginRequest);
    return this.createJwt(user);
  }
};
UserService = __decorateClass([
  (0, import_typedi4.Service)(),
  __decorateParam(0, (0, import_typedi4.Inject)("PRISMA"))
], UserService);

// src/user/user.input.ts
var import_type_graphql10 = require("type-graphql");
var UserCreateInput = class {
};
__decorateClass([
  (0, import_type_graphql10.Field)()
], UserCreateInput.prototype, "firstName", 2);
__decorateClass([
  (0, import_type_graphql10.Field)()
], UserCreateInput.prototype, "lastName", 2);
__decorateClass([
  (0, import_type_graphql10.Field)({ nullable: true })
], UserCreateInput.prototype, "middleName", 2);
__decorateClass([
  (0, import_type_graphql10.Field)()
], UserCreateInput.prototype, "phone", 2);
UserCreateInput = __decorateClass([
  (0, import_type_graphql10.InputType)()
], UserCreateInput);

// src/employeesOnOffices/employeesOnOffices.schema.ts
var import_type_graphql11 = require("type-graphql");
var EmployeesOnOfficesSchema = class {
};
__decorateClass([
  (0, import_type_graphql11.Field)()
], EmployeesOnOfficesSchema.prototype, "createdBy", 2);
__decorateClass([
  (0, import_type_graphql11.Field)(() => import_type_graphql11.ID)
], EmployeesOnOfficesSchema.prototype, "employeeId", 2);
__decorateClass([
  (0, import_type_graphql11.Field)(() => import_type_graphql11.ID)
], EmployeesOnOfficesSchema.prototype, "officeId", 2);
EmployeesOnOfficesSchema = __decorateClass([
  (0, import_type_graphql11.ObjectType)()
], EmployeesOnOfficesSchema);

// src/employeesOnOffices/employeesOnOffices.service.ts
var import_typedi5 = require("typedi");
var EmployeesOnOfficesService = class {
  constructor(prisma2) {
    this.prisma = prisma2;
  }
  async getEmployee(employeeOnOffice) {
    return this.prisma.employeesOnOffices.findUnique({
      where: {
        employeeId_officeId: {
          employeeId: employeeOnOffice.employeeId,
          officeId: employeeOnOffice.officeId
        }
      }
    }).employee();
  }
  async getOffice(employeeOnOffice) {
    return this.prisma.employeesOnOffices.findUnique({
      where: {
        employeeId_officeId: {
          employeeId: employeeOnOffice.employeeId,
          officeId: employeeOnOffice.officeId
        }
      }
    }).office();
  }
};
EmployeesOnOfficesService = __decorateClass([
  (0, import_typedi5.Service)(),
  __decorateParam(0, (0, import_typedi5.Inject)("PRISMA"))
], EmployeesOnOfficesService);

// src/index.ts
global.tempAuthMinutes = 5;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AddressCreateInput,
  AddressSchema,
  EmployeeCreateInput,
  EmployeeSchema,
  EmployeeService,
  EmployeesOnOfficesSchema,
  EmployeesOnOfficesService,
  OfficeCreateInput,
  OfficeSchema,
  OfficeService,
  OrganizationCreateInput,
  OrganizationSchema,
  OrganizationService,
  UserCreateInput,
  UserSchema,
  UserService,
  prisma
});
