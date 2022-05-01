import { Request, Response } from 'express'
import { FindAllProductsService } from '../../services/product/findAllProducts'

export class FindAllProductsController {
  static async find(req: Request, res: Response) {
    try {
      const products = await FindAllProductsService.execute()
      res.status(200).json({products})
    } catch (error: any) {
      res.status(400).json(error.message)
    }
  }
}