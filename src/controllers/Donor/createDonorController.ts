import { Request, Response } from 'express'
import FindDonorService from '../../services/donor/findDonor'
import CreateDonorService from '../../services/donor/createDonor'

export class CreateDonorController {
  static async create(req: Request, res: Response) {
    const { cep, cnpj, email, name, password, confirmpassword }: TDonor =
      req.body

    //Validações
    if (!name || !email || !password || !cnpj || !cep || !confirmpassword) {
      res.status(422).json({
        status: 422,
        message: 'All fields must be filled.'
      })

      return
    }

    if (password.length < 8) {
      res.status(422).json({
        status: 422,
        message: 'The password must be at least 8 characters long!'
      })

      return
    }

    if (password !== confirmpassword) {
      res.status(422).json({
        status: 422,
        message: 'The passwords must match!'
      })

      return
    }

    try {
      const donorExists = await FindDonorService.execute(cnpj)

      if (donorExists) {
        return res.status(400).json({ message: 'Donor already exists.' })
      }

      const donorData = {
        name,
        cep,
        cnpj,
        email,
        password
      }

      CreateDonorService.execute(donorData)
      
      res.status(201).json({message: "Donor created successfully!"})
    } catch (error: any) {
      return res.status(409).json(error.message);
    }
  }
}
