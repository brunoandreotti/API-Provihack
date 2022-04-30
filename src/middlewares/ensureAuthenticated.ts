import jwt from "jsonwebtoken";
import { getToken } from "../services/jwt/getToken";
import { Request, Response, NextFunction } from "express";

const tokenHash = "KASKHDASKDKAJSHDAKSDHJASN";

const ensureAuthenticated = (
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  const authHeaders = req.headers.authorization;
  //const cookieHeaders = req.headers.cookie;

  //Verifica se há um header de authorization
  if (!authHeaders) {
    return res.status(401).json({ status: 401, message: "Acesso Negado!" });
  }

  //Verifica se há um header de cookie
  // if (!cookieHeaders) {
  //   return res.status(401).json({ status: 401, message: "Acesso Negado!" });
  // }

  //Pega o token vindo do header da requisição
  const token = getToken(req);

  try {
    //Decodifica o token, se for valido, envia as informações do user na requisição
    const decoded: any = jwt.verify(token, tokenHash);
    req.user = {
      id: decoded.id,
    };

    next();
  } catch (error) {
    return res.status(400).json({ status: 400, message: "Token inválido!" });
  }
};

export default ensureAuthenticated;
