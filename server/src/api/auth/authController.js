import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../user/userModel";
import roleModel from "../role/roleModel";


//==============================
//_* CREATED UN USER
//==============================
export const singUp = async (req, res) => {
  try {
    const userX = await userModel.findOne({ userName: req.body.userName });
    const emailX = await userModel.findOne({ email: req.body.email });

    if (userX) {
      res.status(500).json({ ok: false, message: "userName ya existe" });
    } else if (emailX) {
      res.status(500).json({ ok: false, message: "email ya existe" });
    } else {
      const user = new userModel({
        userName: req.body.userName,
        email: req.body.email,
        // password: await bcrypt.hash(req.body.password, 10),
        password: await userModel.encryptPassword(req.body.password),
      });

      //si existe los roles ponle los roles que tiene y si no tiene ponle por default el  role de user
      if (req.body.roles) {
        const ArRoles = await roleModel.find({ name: { $in: req.body.roles } });
        user.roles = ArRoles.map((rol) => rol._id);
      } else {
        const rol = await roleModel.findOne({ name: "user" });
        user.roles = [rol._id];
      }

      const saveUser = await user.save();
      const token = jwt.sign(
        {
          id: saveUser._id,
          userName: saveUser.userName,
          roles: saveUser.roles,
        },
        process.env.SECRET,
        {
          expiresIn: "5h",
        }
      );
      res.status(200).json({ ok: true, message: "user created ", token });
    }
  } catch (err) {
    console.log(err);
  }
};



//==============================
//_* LOGIN UN USER
//==============================
export const singIn = async (req, res) => {
  const userExiste = await userModel.findOne({ email: req.body.email });
  if (!userExiste)
    return res.json({ ok: false, message: "el email no existe!!" });

  const pass = await userModel.comparePassword(
    req.body.password,
    userExiste.password
  );

  if (!pass) {
    return res.json({ ok: false, message: "pasword incorrecto" });
  } else {
    const token = jwt.sign(
      {
        id: userExiste._id,
        userName: userExiste.userName,
        roles: userExiste.roles,
      },
      process.env.SECRET,
      { expiresIn: "5h" }
    );
    return res.json({ ok: true, message: "login successfully", token });
  }
};
