import * as bcrypt from "bcrypt";
import { Request } from "express";
import * as jwt from "jsonwebtoken";
import config from '../config';

//Utility functions
export const GenerateSalt = async (): Promise<string> => {
  return await bcrypt.genSalt();
};

export const GeneratePassword = async (password: string, salt: string): Promise<string> => {
  return await bcrypt.hash(password, salt);
};

export const ValidatePassword = async (
  enteredPassword: string,
  savedPassword: string,
  salt: string
): Promise<boolean> => {
  return (await GeneratePassword(enteredPassword, salt)) === savedPassword;
};

export const GenerateSignature = (payload: string): string => {
  return jwt.sign(payload, config.APP_SECRET, { expiresIn: "30d" });
};

export const ValidateSignature = (req: Request): boolean => {
  const signature: string | undefined = req.get("Authorization");

  if (signature) {
    const payload: string | jwt.JwtPayload = jwt.verify(signature.split(" ")[1], config.APP_SECRET);
    // req.user = payload;
    return true;
  };

  return false;
};