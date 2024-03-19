import Tarea from "../database/model/Tareas.js";

const listarTareas = async (req, res) => {
  try {
    const tareas = await Tarea.find();
    res.status(200).json(tareas);
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: "No se pudo encontrar las Tareas" });
  }
};

const crearTareas = async (req, res) => {
  try {
    const tareaNueva = await Tarea.create(req.body);

    await tareaNueva.save();
    res.status(201).json({ msg: "Tarea agregada correctamente!" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "No se pudo crear la Tarea" });
  }
};

const eliminarTarea = async (req, res) => {
  try {
    const tarea = await Tarea.findById(req.params.id);
    if (!tarea) {
      return res.status(404).json({ msg: "Tarea No Encontrada" });
    }

    await Tarea.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "Tarea Eliminada Correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Error! No se pudo eliminar el color" });
  }
};

export { listarTareas, crearTareas, eliminarTarea };
