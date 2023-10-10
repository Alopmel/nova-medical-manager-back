import mongoose from "mongoose";

//Creamos el esquema de usuarios
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true //Quita los espacios en blanco
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: Number,
        required: true
    },
}, {
    timestamps: true // Fecha actual de creación o modificación
});

//User crea una colleción de usuarios dónde guarda un diccionario y se pueden hacer consultas con los métodos
export default mongoose.model('User' , userSchema);