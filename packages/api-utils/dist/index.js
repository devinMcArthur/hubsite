"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  jsonwt: () => jsonwt,
  sendText: () => sendText
});
module.exports = __toCommonJS(src_exports);

// src/sendText.ts
var sendText = async (phone, message) => {
  console.log(`${phone}: ${message}`);
};

// src/jwt.ts
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  jsonwt,
  sendText
});
