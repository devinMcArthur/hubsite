import { LoginRequest, User, prisma, Employee } from "hubsite-models";
import { IContext } from "../../typescript/graphql";
import { jsonwt } from "api-utils";

const generateContext = async ({ req, res }: IContext) => {
  const token = req.headers.authorization;

  let user: User | null = null;
  let employee: Employee | null = null;
  let loginRequest: LoginRequest | null = null;

  if (token) {
    const decoded = jsonwt.decode(token);

    if (decoded.userId) {
      user = await prisma.user.findUnique({
        where: {
          id: decoded.userId,
        },
      });

      if (decoded.employeeId) {
        employee = await prisma.employee.findUnique({
          where: {
            id: decoded.employeeId,
          },
        });
      }
    } else if (decoded.loginRequestId) {
      loginRequest = await prisma.loginRequest.findUnique({
        where: {
          id: decoded.loginRequestId,
        },
      });
    }
  }

  return {
    req,
    res,
    user,
    employee,
    loginRequest,
  };
};

export default generateContext;
