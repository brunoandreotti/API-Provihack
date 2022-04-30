import bcrypt from 'bcrypt'

export class Bcrypt {
  static async encrypt(password: string) {
    return await bcrypt.hash(password, 10);
  }

  static async decrypt(password: string, hash: string) {
    return await bcrypt.compare(password, hash)
  }
}