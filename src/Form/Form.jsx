import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    consulta: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    consulta: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let newErrors = {};

    if (form.name === "") {
      newErrors.name = "El campo de nombre es obligatorio";
    }

    if (form.email === "") {
      newErrors.email = "El campo de correo electrónico es obligatorio";
    }

    if (form.consulta === "") {
      newErrors.consulta = "El campo de consulta es obligatorio";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
        const data = {
            nombre: form.name,
            telefono: form.phone,
            email: form.email,
            consulta: form.consulta
        };
        fetch('https://repo.ifelse.com.ar:7000/api/leads', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error(error));
        };

        setForm({
            name: "",
            email: "",
            phone: "",
            consulta: "",

        })
      document.getElementById("mensaje-enviado").style.display = "block";      
    };

  return (
    <form onSubmit={handleSubmit} className="contenedorForm">
      <h1 className="contactenos">Contáctenos:</h1>
      <label htmlFor="name">Nombre:</label>
      <input type="text" id="name" name="name" value={form.name} onChange={handleInputChange} />
      {errors.name && <p>{errors.name}</p>}

      <hr />
    
      <label htmlFor="email">Correo electrónico:</label>
      <input type="email" id="email" name="email" value={form.email} onChange={handleInputChange} />
      {errors.email && <p>{errors.email}</p>}

      <label htmlFor="phone">Teléfono:</label>
      <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleInputChange} />

      <label htmlFor="consulta">Consulta:</label>
      <textarea id="consulta" name="consulta" value={form.consulta} onChange={handleInputChange} />
      {errors.consulta && <p>{errors.consulta}</p>}

      <button type="submit">Enviar</button>

      <h3 id="mensaje-enviado">Su mensaje ha sido enviado.</h3>
    </form>
  );
  }

export default Form;