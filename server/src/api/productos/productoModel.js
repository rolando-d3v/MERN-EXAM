import { Schema, model } from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2'

const productoSchema = new Schema(
  {
    name: String,
    category: String,
    price: Number,
    imgUrl: String,
  },
  {
    timestamps: true,
    versionKey: false   //para que no aparesca _0 de la base de datos de mongoDB
  }
);

productoSchema.plugin(mongoosePaginate)

export default model("Productos", productoSchema);
