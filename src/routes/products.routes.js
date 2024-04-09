import { Router } from "express";
import { getAll, getOne, insertOne,updateOne,deleteOne
} from "../controller/products.controller.js";

const router = Router();

// Ruta para obtener todos los productos
router.get('/', getAll);

// Ruta para obtener un solo producto por código de barras
router.get('/:productCode', getOne);

// Ruta para insertar un producto
router.post('/', insertOne);

// Ruta para actualizar un producto
router.put("/:productCode", updateOne)

// Ruta para eliminar un producto
router.delete("/:productCode", deleteOne);


export default router;
