import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";
import Cookies from 'js-cookie';


export const register = async (req, res) => {
    const {email, password, username} = req.body;
    
    try {

        const userFound = await User.findOne({email})
        if (userFound) return res.status(400).json(["El email insertado está en uso"]);

        const passwordHash = await bcrypt.hash(password, 10) // Encriptar la contraseña
        
        const newUser = new User({
            username,
            email,
            password: passwordHash, 
        });
        
        const userSaved = await newUser.save(); // Se guarda el usuario
        const token = await createAccessToken({id: userSaved._id}); // Se crea el token

        res.cookie("token", token, {
            sameSite: "Lax",
            
            httpOnly: false
        }); // Se guarda en una cookie

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
        
        res.cookie("token", token, {
            sameSite: "Lax",
            
            httpOnly: false
        }); // Se guarda en una cookie

        res.json({ // Devuelve la respuesta
            id: userFound._id,
            username: userFound.username,
            token: userFound.token,
            createdAt: userFound.createdAt,
            updateAt: userFound.updatedAt
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    };    
};

export const logout = (req, res) => {
    res.cookie('token', "", {
        expires: new Date(0)
    });
    return res.sendStatus(200);
};

export const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id) // Me devuelve toda la info del usuario
    
    if (!userFound) return res.status(400).json({message: "User not found"});

    return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        createdAt: userFound.createdAt,
        updateAt: userFound.updateAt,
    });
};

export const verifyToken = async (req, res) => {
    const { token } = req.cookies;
    if (!token) return res.send(false);
  
    jwt.verify(token, TOKEN_SECRET, async (error, user) => {
      if (error) return res.sendStatus(401);
  
      const userFound = await User.findById(user.id);
      if (!userFound) return res.sendStatus(401);
  
      return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
      });
    });
  };
  