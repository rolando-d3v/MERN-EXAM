import productoModel from "./productoModel";


//==============================
//CREATED PRODUCTO
//==============================
export const createProducto = async (req, res) => {
  try {
    const producto = new productoModel({
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
      imgUrl: req.body.imgUrl,
    });
    await producto.save();
    res
      .status(201)
      .json({ ok: true, message: "producto created successfully" });
  } catch (err) {
    console.log(err);
  }
};


//==============================
//GET PRODUCTOS CON PAGINATE
//==============================
export const getProductos = async (req, res) => {
  try {

    const limit = parseInt(req.query.limit) || 5
    const page = parseInt(req.query.page) || 1

    const producto = await productoModel.paginate({}, {page, limit, sort:{ createdAt: -1 }});   //mostrar de menor a mayor
    res.status(200).json({ ok: true, producto });
  } catch (err) {
    console.log(err);
  }
};


//GET PRODUCTOS
// export const getProductos = async (req, res) => {
//   try {
//     const producto = await productoModel.find();
//     res.status(200).json({ ok: true, producto });
//   } catch (err) {
//     console.log(err);
//   }
// };


//==============================
//GET ONE PRODUCTO
//==============================
export const getProductoId = async (req, res) => {
  try {
    const producto = await productoModel.findById({
      _id: req.params.productoId,
    });

    !producto
      ? res.send({ message: "el id no existe" })
      : res.status(200).json({ ok: true, producto });
  } catch (err) {
    console.log(err);
  }
};


//==============================
//UPDATE ONE PRODUCTO
//==============================
export const updateProducto = async (req, res) => {
  try {
    const producto = await productoModel.findByIdAndUpdate(
      { _id: req.params.productoId },
      req.body,
      { new: true }
    );

    !producto
      ? res.send({ message: "el id no existe" })
      : res.status(204).json({ ok: true, producto });
  } catch (err) {
    console.log(err);
  }
};


//==============================
//DELETE ONE PRODUCTO
//==============================
export const deleteProducto = async (req, res) => {
  try {
    const producto = await productoModel.findOneAndDelete({
      _id: req.params.productoId,
    });
    res.json({ ok: true, message: `${producto.name} deleted successfully` });
  } catch (err) {
    console.log(err);
  }
};
