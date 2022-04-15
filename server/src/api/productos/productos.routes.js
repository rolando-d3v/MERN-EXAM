import { Router } from "express";
import { verifyToken, tokenAdmin, tokenSenales } from "../../middlewares/authToken";
import * as productoCtrl from "./productoController";

const router = Router();

router.post("/", [verifyToken, tokenSenales], productoCtrl.createProducto);
router.get("/", productoCtrl.getProductos);
router.get("/:productoId", productoCtrl.getProductoId);
router.put("/:productoId", productoCtrl.updateProducto);
router.delete("/:productoId", productoCtrl.deleteProducto);

export default router;
