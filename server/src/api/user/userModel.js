// import { Schema, model } from "mongoose";
// import bcrypt from "bcrypt";

// const userSchema = new Schema(
//   {
//     userName: {
//       type: String,
//       unique: true,
//       required: true,
//     },
//     email: {
//       type: String,
//       trim: true,
//       lowercase: true,
//       unique: true,
//       required: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//     roles: [{ ref: "Role", type: Schema.Types.ObjectId }],
//   },
//   { timestamps: true, versionKey: false }
// );

// //ENCRYPT PASSWORD
// userSchema.statics.encryptPassword = async (password) => {
//   const salt = await bcrypt.genSalt(10);
//   return await bcrypt.hash(password, salt);
// };


// //DECRIFA PASSWORD
// userSchema.statics.comparePassword = async (password, cryptoPassword) => {
//   return await bcrypt.compare(password, cryptoPassword);
// };


// //FUNCION PARA NO MOSTRAR EL PASSWORD EN EL JSON DEL BACK-END
// userSchema.methods.toJSON = function() {
//   let user = this;
//   let userObject = user.toObject();
//   delete userObject.password;
//   return userObject;
// }

// export default model("User", userSchema);
