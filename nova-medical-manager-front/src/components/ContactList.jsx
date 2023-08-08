import React, { useState, useEffect } from "react";
import { fetchContacts } from "../api/contactApi"; // Asegúrate de que la ruta sea correcta

function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const contactsData = await fetchContacts();
        setContacts(contactsData);
      } catch (error) {
        // Manejar el error, por ejemplo, mostrar un mensaje al usuario
      }
    }
    
    fetchData();
  }, []);

  return (
    <div>
      <h1>Contact List</h1>
      <ul>
        {contacts.map((contact) => (
          <li key={contact._id}>
            <h2>Name: {contact.name}</h2>
            <p>Phone: {contact.phone}</p>
            <p>Email: {contact.email}</p>
            <p>Comment: {contact.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
