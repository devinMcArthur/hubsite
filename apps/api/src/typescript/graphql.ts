import { Employee, LoginRequest, User } from "hubsite-models";
import { Request, Response } from "express";

export interface IContext {
  req: Request;
  res: Response;
  user: User | null;
  employee: Employee | null;
  loginRequest: LoginRequest | null;
}
