import { Donor } from "../../models/Donor.model";
import { Product } from "../../models/Product.model";

export class FindAllProductsService {
  static async execute() {
    try {
      const newProduct = Product.findAll({include: [Donor]}, )
      
      return newProduct
    } catch (error) {
      return error
    }
    
  }
}