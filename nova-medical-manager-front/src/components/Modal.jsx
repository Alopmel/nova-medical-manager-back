import React, { useState, useEffect } from "react";
import ContactForm from './ContactForm';

function Modal({ visible, onClose }) {
  const [isFormSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    let timer;
    if (isFormSubmitted) {
      timer = setTimeout(() => {
        setFormSubmitted(false);
        onClose();
      }, 3000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isFormSubmitted, onClose]);

  const handleOnClose = () => {
    onClose();
  };

  const handleFormSubmit = () => {
    // Lógica para enviar el formulario aquí
    // Supongamos que el envío del formulario es exitoso
    setFormSubmitted(true);
  };

  if (!visible) return null;

  return (
    <div
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-50 flex justify-center items-center"
    >
      {isFormSubmitted ? (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
          <div className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md shadow-md">
            ¡Formulario enviado correctamente!
          </div>
        </div>
      ) : (
        <ContactForm onClose={handleOnClose} onSubmitSuccess={handleFormSubmit} />
      )}
    </div>
  );
}

export default Modal;
