import bcrypt from "bcryptjs";
import { createAccesToken } from "../libs/jwt.js";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

// Función para el registro
export const register = async (req, res) => {
    const {username, email, phone, password, role} = req.body
    
    try {
        // Buscamos si ya existe el usuario
        const userFound = await User.findOne({email});

        if(userFound) return res.status(400).json(['El correo ya está en uso']);

        // Encriptamos la contraseña
        const passwordHash = await bcrypt.hash(password, 10);
        // Creamos una instancia como objeto
        const newUser = new User({
            username,
            email,
            phone,
            password: passwordHash,
            role
        });
        // Guardamos el usuario
        const userSaved = await newUser.save();
        // Le pasamos el id como parámetro y nos devuelve el token 
        const token =await createAccesToken({id: userSaved._id}) 
        // La guarda en una cookie
        res.cookie('token', token);
        // Lo que va a recibir el front en forma json
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            phone: userSaved.phone,
            role: userSaved.role,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt
        }); 
    } catch (error) {
        res.status(500).json({ message: error.message });        
    };    
};

export const login = async (req, res) => {
    const {email, password} = req.body
    
    try {
        // Buscamos si existe el email
        const userFound = await User.findOne({email})

        if (!userFound) return res.status(400).json(["Usuario no encontrado"]);

        // Si lo encuentra comparamos la contraseña
        const isMatch = await bcrypt.compare(password, userFound.password);

        if (!isMatch) return res.status(400).json(["Credenciales inválidas"]);

        // Le pasamos el id como parámetro y nos devuelve el token 
        const token =await createAccesToken({id: userFound._id}) 
        // La guarda en una cookie
        res.cookie('token', token);
        // Lo que va a recibir el front en forma json
        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            phone: userFound.phone,
            role: userFound.role,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt,
            token: token
        }); 
    } catch (error) {
        res.status(500).json({ message: error.message });        
    };    
};

export const logout = (req, res) => {
    res.cookie('token', "", {
        expires: new Date(0)
    })
    return res.sendStatus(200)
}


export const profile = async (req, res) => {
    // Esto devuelve la info de user
    const userFound = await User.findById(req.user.id) // Me devuelve toda la info del usuario
    
    if (!userFound) return res.status(400).json({message: "User not found"});

    return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        phone: userFound.phone,
        role: userFound.role,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt
    });
}

export const verifyToken = async (req, res) => {
   const { token } = req.cookies;
    console.log(req.cookies);
    if (!token) return res.send(false);
    console.log(token);
    jwt.verify(token, TOKEN_SECRET, async (error, user) => {
      if (error) return res.sendStatus(401);
  
      const userFound = await User.findById(user.id);
      console.log(userFound)
      if (!userFound) return res.sendStatus(401);
  
      return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
      });
    });
  };
/*
  export const verifyToken = async (req, res) => {
    const { token } = req.cookies;
  
    if (!token) {
      return res.status(401).json({ message: 'Token no presente' });
    }
  
    try {
      const decoded = jwt.verify(token, 'TOKEN_SECRET'); // Reemplaza 'tu_clave_secreta' con la clave que estás utilizando
  
      const userFound = await User.findById(decoded.id);
  
      if (!userFound) {
        return res.status(401).json({ message: 'Usuario no encontrado' });
      }
  
      return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
      });
    } catch (error) {
      return res.status(401).json({ message: 'Token inválido' });
    }
  };*/