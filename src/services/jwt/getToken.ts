import { Request } from "express";

export const getToken = (req: Request) => {
  //Pega o token vindo no header
  const authHeaders: any = req.headers.authorization;

  //const cookieHeaders = req.headers.cookie;

  //Por padrão o token é enviado como 'Bearer token', com isso é necessário fazer um split para resgatar somente o token
  const [, token] = authHeaders.split(" ");
  //const [, token1] = cookieHeaders.split("=");

  return token;
};
