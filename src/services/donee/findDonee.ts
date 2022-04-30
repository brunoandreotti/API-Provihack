import { Donee } from "../../models/Donee.model";

class FindDoneeService {
  static async execute(cnpj: string) {
    try {
      const donee = Donee.findOne({ where: { cnpj: cnpj } });

      return donee;
    } catch (error) {
      return error;
    }
  }
}

export default FindDoneeService;
