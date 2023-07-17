import userModel from "../models/User.js";
import bcrypt from "bcrypt";
import { generateJwt } from "../helpers/jwt.js";

/**
 * all users in the collection
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const allUsers = async (req, res) => {
  console.log(req.userId); // the auth middleware adds this property, which you may want use
  try {
    const allUsers = await userModel.find();
    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(404).json({ mesage: error.toString() });
  }
};

/**
 * create new user in the collection
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const newUser = async (req, res) => {
  const userHashedPassword = await bcrypt.hash(req.body.password, 10);
  try {
    const createdUser = await userModel.create({
      name: req.body.name,
      password: userHashedPassword,
    });
    return res.status(200).json({ newCreatedUser: createdUser });
  } catch (error) {
    return res.status(404).json({ message: error.toString() });
  }
};

/**
 * check if the user exist and if exest then the password is correct or not
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const userLogin = async (req, res) => {
  const chkUserName = await userModel.findOne({ name: req.body.name }); // null or {}

  if (chkUserName) {
    const chekPassword = await bcrypt.compare(
      req.body.password,
      chkUserName.password
    );

    if (chekPassword) {
      const jwt = generateJwt(chkUserName);

      return res
        .status(200)
        .cookie("jwtToken", jwt, {
          httpOnly: true,
        })
        .json({ message: "User Authenticated" });
    } else {
      return res.status(404).json({ message: "password does not match" });
    }
  }

  return res.status(404).json({ message: "User not found" });
};

export default { newUser, allUsers, userLogin };
