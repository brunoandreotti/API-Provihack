import { Request, Response } from "express";
import FindDoneeService from "../../services/donee/findDonee";
import CreateDoneeService from "../../services/donee/createDonee";

export class CreateDoneeController {
  static async create(req: Request, res: Response) {
    const {
      cep,
      cnpj,
      email,
      name,
      password,
      confirmpassword,
      responsible,
    }: TDonee = req.body;

    //Validações
    if (
      !name ||
      !email ||
      !password ||
      !cnpj ||
      !cep ||
      !confirmpassword ||
      !responsible
    ) {
      res.status(422).json({
        status: 422,
        message: "All fields must be filled.",
      });

      return;
    }

    if (password.length < 8) {
      res.status(422).json({
        status: 422,
        message: "The password must be at least 8 characters long!",
      });

      return;
    }

    if (password !== confirmpassword) {
      res.status(422).json({
        status: 422,
        message: "The passwords must match!",
      });

      return;
    }

    try {
      const doneeExists = await FindDoneeService.execute(cnpj);

      if (doneeExists) {
        return res.status(400).json({ message: "Donee already exists." });
      }

      const doneeData = {
        name,
        responsible,
        cep,
        cnpj,
        email,
        password,
      };

      CreateDoneeService.execute(doneeData);

      res.status(201).json({ message: "Donee created successfully!" });
    } catch (error: any) {
      return res.status(409).json(error.message);
    }
  }
}
