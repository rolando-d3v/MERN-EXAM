// import roleModel from "../role/roleModel";
// import userModel from "./userModel";

import {PrismaClient} from '@prisma/client'

//==============================
//_* OBTENER ALL USERS
//==============================
export const getUsers = async (req, res) => {
  try {
    const user = await userModel.find().populate("roles");
    res.status(200).json({ ok: true, user });
  } catch (err) {
    console.log(err);
  }
};

//==============================
//_* CREATE ON USER
//==============================
export const createUser = async (req, res) => {
  try {
    const user = new userModel({
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
    });

    if (req.body.roles) {
      const rolesMin = req.body.roles.toLowerCase();  //transforma el input en minuscula
      const userRoles = await roleModel.findOne({ name: { $in: rolesMin } });

      !userRoles && res.json({ message: `Role ${rolesMin} no exite!!`})

      const userRol = await roleModel.find({ name: { $in: rolesMin } });
      user.roles = userRol.map((rol) => rol._id);
      console.log(user);
      return res.status(200).json({ ok: true, message: "user create", user });
    }

    const userRol = await roleModel.findOne({ name: "user" });
    user.roles = [userRol._id];

    console.log(user);
    res.status(200).json({ ok: true, message: "user create", user });
  } catch (err) {
    console.log(err);
  }
};
