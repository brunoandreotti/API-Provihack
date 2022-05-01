import jwt from "jsonwebtoken";

const tokenHash = "KASKHDASKDKAJSHDAKSDHJASN";

const createUserToken = async (user: any) => {
  //Cria um JWT assinado
  const token = jwt.sign({ id: user.id }, tokenHash, {
    expiresIn: "1d",
  });

  return token;
};

export default createUserToken;
