import { Product } from "../../models/Product.model";

export class CreateProductService {
  static async execute(data: TProducts, id: string) {
    try {
      const newProduct = new Product({donorId: id, ...data})
      newProduct.save()
      return newProduct
    } catch (error) {
      return error
    }
    
  }
}