import axios from "./axios"; // Asegúrate de que la ruta a axios sea correcta

export const fetchContacts = async () => {
  try {
    const response = await axios.get("/contacts");
    return response.data;
  } catch (error) {
    console.error("Error fetching contacts:", error);
    throw error;
  }
};
