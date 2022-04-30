import { Donor } from "../../models/Donor.model";
import { Bcrypt } from "../utils/encrypt";

class CreateDonorService {
  static async execute(data: TDonor) {
    try {
      const {password, ...donor} = data
      const encodedPassword = await Bcrypt.encrypt(password)
      const newDonor = await Donor.create({
        password: encodedPassword,
        ...donor
      })
      return newDonor
    } catch (error) {
      return error
    }
  }
}

export default CreateDonorService