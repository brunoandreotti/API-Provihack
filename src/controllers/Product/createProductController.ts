import { Request, Response } from 'express'
import { CreateProductService } from '../../services/product/createProduct'

export class CreateProductController {
  static async create(req: Request | any, res: Response) {
    const id = req.user.id

    console.log(id)

    const { expiration, name, qnt, unity }: TProducts = req.body

    //Validaçoes
    if (!name || !expiration || !qnt || !unity) {
      res.status(422).json({
        status: 422,
        message: 'All fields must be filled.'
      })
    }
      
    const productData = {
      name,
      qnt,
      unity,
      expiration
    }

    try {
      const newProduct = await CreateProductService.execute(productData, id)

      res.status(201).json({message: "Product created successfully!", newProduct})
    } catch (error: any) {
      return res.status(409).json(error.message);
    }
  }
}
