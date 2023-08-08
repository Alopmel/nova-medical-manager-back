import { Router } from "express";
import Contact from "../models/contact.model.js"; // Asegúrate de que la ruta del modelo sea correcta

const router = Router();

// Ruta para crear un nuevo contacto
router.post("/contacts", async (req, res) => {
  try {
    // Crea un nuevo contacto usando el modelo de Contact y los datos del formulario
    const newContact = new Contact(req.body);

    // Guarda el nuevo contacto en la base de datos
    await newContact.save();

    // Responde con el nuevo contacto creado
    res.status(201).json(newContact);
  } catch (error) {
    // Si hay un error, responde con un código de estado 500 y el mensaje de error
    res.status(500).json({ error: "Error al crear el contacto" });
  }
});

router.get("/contacts", async (req, res) => {
    try {
      const contacts = await Contact.find();
      res.status(200).json(contacts);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener la lista de contactos" });
    }
  });

export default router;
