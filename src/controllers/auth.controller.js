import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";

export const register = async (req, res) => {
    const {email, password, username} = req.body;
    
    try {
        const passwordHash = await bcrypt.hash(password, 10) // Encriptar la contraseña
        
        const newUser = new User({
            username,
            email,
            password: passwordHash, 
        });
        
        const userSaved = await newUser.save(); // Se guarda el usuario
        const token = await createAccessToken({id: userSaved._id}); // Se crea el token
        
        res.cookie('token', token); // Se guarda en una cookie

        res.json({ // Devuelve la respuesta
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updateAt: userSaved.updatedAt
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    };    
};

export const login = async (req, res) => {
    const {email, password} = req.body;
    
    try {

        const userFound = await User.findOne({email});
        if (!userFound) return res.status(400).json({message: "User not found"}); // Si no encuentra el usuario

        const isMatch = await bcrypt.compare(password, userFound.password); // Compara la contraseña
        
        if (!isMatch) return res.status(400).json({ message: "Invalid Credencial"}); // Si no coincide la contraseña
        
        const token = await createAccessToken({id: userFound._id}); // Se crea el token
        
        res.cookie('token', token); // Se guarda en una cookie

        res.json({ // Devuelve la respuesta
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updateAt: userFound.updatedAt
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    };    
};

export const logout = (rep, res) => {
    res.cookie('token', "", {
        expires: new Date(0)
    });
    return res.sendStatus(200);
}
