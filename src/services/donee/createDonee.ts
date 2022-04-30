import { Donee } from "../../models/Donee.model";
import { Bcrypt } from "../utils/encrypt";

class CreateDoneeService {
  static async execute(data: TDonee) {
    try {
      const { password, ...donee } = data;
      const encodedPassword = await Bcrypt.encrypt(password);
      const newDonee = new Donee({
        password: encodedPassword,
        ...donee,
      });
      newDonee.save();
      return newDonee;
    } catch (error) {
      return error;
    }
  }
}

export default CreateDoneeService;
