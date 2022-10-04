import jwt from "jsonwebtoken";

const ErrorMessage = "Could not find secret key, please contact support";

const sign = (payload: string | object | Buffer, options?: jwt.SignOptions) => {
  if (!process.env.JWT_SECRET) throw new Error(ErrorMessage);

  return jwt.sign(payload, process.env.JWT_SECRET, options);
};

const decode = (
  token: string,
  options?: jwt.DecodeOptions & { completed: true },
  verifyOptions?: jwt.VerifyOptions & { completed: true },
) => {
  try {
    if (!process.env.JWT_SECRET) throw new Error(ErrorMessage);

    jwt.verify(token, process.env.JWT_SECRET, verifyOptions);
  } catch (error) {
    throw new Error("Permission denied");
  }

  return jwt.decode(token, options) as jwt.JwtPayload;
};

export const jsonwt = {
  sign,
  decode,
};
