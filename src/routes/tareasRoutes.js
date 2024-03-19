import { Router } from "express";
import {
  listarTareas,
  crearTareas,
  eliminarTarea,
} from "../controllers/tareaController.js";

const router = Router();

router.get("/tareas", listarTareas);
router.post("/tareas", crearTareas);

router.delete("/tareas/:id", eliminarTarea);

export default router;
