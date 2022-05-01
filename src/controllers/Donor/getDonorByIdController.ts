import { Donor } from "../../models/Donor.model";
import { Request, Response } from "express";
import { Product } from "../../models/Product.model";

export class FindDonorByIdController {
  static async find(req: Request | any, res: Response) {
    const id = req.user.id;

    //Retorna os dados do usuário baseado no id menos o password
    const user = await Donor.findByPk(id, {
      attributes: { exclude: ["password"]},
      include: [Product]
    });

    if (!user) {
      return res.status(422).json({
        status: 422,
        message: "Donor not found!",
      });
    }

    res.status(200).json({ user });
  }
}
