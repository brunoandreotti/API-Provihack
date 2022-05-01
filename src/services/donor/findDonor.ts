import { Donor } from "../../models/Donor.model";

class FindDonorService {
  static async execute(cnpj: string){
    try {
      const donor = Donor.findOne({ where: {cnpj: cnpj}})

      return donor
    } catch (error) {
      return error
    }
  }
}

export default FindDonorService