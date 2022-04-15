import jwt from "jsonwebtoken";
import roleModel from "../api/role/roleModel";
import userModel from "../api/user/userModel";
import "../config";

//==============================
//_* VERIFY TOKEN DE AUTHORIZATION
//==============================
export const verifyToken = async (req, res, next) => {
  try {
    const token = req.get("Authorization");
    // const token = req.headers['x-token']
    if (!token) return res.json({ ok: false, message: "not token provided" });

    const decoded = jwt.verify(token, process.env.SECRET);
    req.usuario = decoded;
    const user = await userModel.findById({ _id: decoded.id });
    if (!user) return res.json({ ok: false, message: "user no existe!!" });
    next();
  } catch (err) {
    res.json({ ok: false, err });
  }
};

//TOKEN ES ADMIN
// export const tokenAdmin = async (req, res, next) => {
//   try {
//     const { id, roles } = req.usuario;
//     //busca los roles por el id
//     // const userId = await userModel.findById(id);
//     const userRoles = await roleModel.find({ _id: roles });
//     console.log(userRoles);

//     for (let i = 0; i < userRoles.length; i++) {
//       if (userRoles[i].name === "admin") {
//         next();
//         return;
//       }
//     }
//     return res.json({ ok: false, message: "el user no es admin" });
//   } catch (err) {
//     res.json({ ok: false, err });
//   }
// };


//==============================
//_* TOKEN ES ADMIN
//==============================
export const tokenAdmin = async (req, res, next) => {
  try {
    const { roles } = req.usuario;
    //busca los roles por el id
    const rok = await roleModel.find({ _id: {$in: roles} });

    for (let i = 0; i < rok.length; i++) {
      if (rok[i].name === "admin") {
        next();
        return;
      }
    }
    return res.status(403).json({ ok: false, message: "Require Admin role!!" });
  } catch (err) {
    res.json({ ok: false, err });
  }
};


//==============================
//_* TOKEN ES SENALES
//==============================
export const tokenSenales = async (req, res, next) => {
  try {

    const {roles} = req.usuario
    console.log(req.usuario);
    const userRole = await roleModel.find({_id: {$in: roles}})

    for (let i = 0; i < userRole.length; i++) {
      if (userRole[i].name === 'senales') {
        next()
        return
      }    
    }

    return res
      .status(403)
      .json({ ok: false, message: "required SENALES role!!" });
  } catch (err) {
    res.json({ ok: false, err });
  }
};
