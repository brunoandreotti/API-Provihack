import { Donee } from "../../models/Donee.model";
import bcrypt from "bcrypt";
import { Request, Response } from "express";
import createUserToken from "../../services/jwt/createLoginToken";

export class LoginDoneeController {
  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        res.status(422).json({
          status: 422,
          message: "All fields must be filled.",
        });

        return;
      }

      const user = await Donee.findOne({ where: { email }, raw: true });

      if (!user) {
        res.status(422).json({
          status: 422,
          message: "Incorrect password or email.",
        });

        return;
      }

      //Verifica se a senha passada pelo usuário é a mesma existente no banco
      //Se as senhas foram iguais retorna 'true' se não retorna 'false'
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        res.status(422).json({
          status: 422,
          message: "The passwords must match!",
        });

        return;
      }

      //Gera o token de autenticação
      const token = await createUserToken(user);

      //Retorna o token
      res.cookie("jwt", token, { httpOnly: true, maxAge: 86400000 });
      res.status(200).json({
        message: "You are authenticated!",
        token,
        user: {
          name: user.name,
          responsible: user.responsible
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
}
