export * from "./prisma";

export * from "./organization";
export * from "./office";
export * from "./address";
export * from "./employee";
export * from "./user";
export * from "./employeesOnOffices";

declare global {
  var tempAuthMinutes: number;
}

global.tempAuthMinutes = 5;
