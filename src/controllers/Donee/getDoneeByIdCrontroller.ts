import { Donee } from "../../models/Donee.model";
import { Request, Response } from "express";

export class FindDoneeByIdController {
  static async find(req: Request | any, res: Response) {
    const id = req.user.id;

    //Retorna os dados do usuário baseado no id menos o password
    const user = await Donee.findByPk(id, {
      attributes: { exclude: ["password"] },
    });

    if (!user) {
      return res.status(422).json({
        status: 422,
        message: "Donee not found!",
      });
    }

    res.status(200).json({ user });
  }
}
