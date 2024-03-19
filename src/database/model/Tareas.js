import mongoose from "mongoose";

const tareasShcema = mongoose.Schema({
    nombreTarea: {
        type: String,
        trim: true,
        required: true,
    }
})

const Tarea = mongoose.model('tarea', tareasShcema)

export default Tarea;