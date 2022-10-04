import { EmployeeRole } from "hubsite-models";
import { AuthChecker } from "type-graphql";
import { IContext } from "../../typescript/graphql";

/**
 * Full login includes login to a User and an Employee account
 *
 * Authorized() === Employee Login
 * Authorized(["ADMIN", ...roles] === Employee + Role
 * Authorized("TEMP") === LoginRequest
 * Authorized("USER") === User Login
 */

const authChecker: AuthChecker<IContext> = async ({ context }, roles) => {
  // if 'Authorized()' check only if employee exists
  if (roles.length === 0) {
    return !!context.employee && !!context.user;
  }

  // Check for user login
  if (roles.includes("USER") && !!context.user) return true;

  // Check for temp login
  if (roles.includes("TEMP") && !!context.loginRequest) return true;

  // Check for employee login
  if (!!context.employee && !!context.user) {
    const rolesArray = Object.values(EmployeeRole);

    // Check for employee roles
    for (const role of rolesArray) {
      if (roles.includes(role) && context.employee.role === role) {
        return true;
      }
    }
  }

  return false;
};

export default authChecker;
