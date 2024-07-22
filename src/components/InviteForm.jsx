// InviteForm.js
import React, { useState } from "react";
import { db } from "../firebase";
import { collection, setDoc, doc } from "firebase/firestore";

const InviteForm = () => {
  const [formData, setFormData] = useState({
    id: "",
    code: "",
    principalName: "",
    qrUrl: "",
    acompanist: [{ name: "", asist: null, etiqueta: "" }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAcompanistChange = (index, e) => {
    const { name, value } = e.target;
    const newAcompanist = [...formData.acompanist];
    newAcompanist[index][name] = value;
    setFormData({
      ...formData,
      acompanist: newAcompanist,
    });
  };

  const addAcompanist = () => {
    if (formData.acompanist.length < 10) {
      setFormData({
        ...formData,
        acompanist: [
          ...formData.acompanist,
          { name: "", asist: null, etiqueta: "" },
        ],
      });
    }
  };

  const removeAcompanist = (index) => {
    const newAcompanist = formData.acompanist.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      acompanist: newAcompanist,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(db); // Verificar la instancia de Firestore
      const docRef = doc(db, "people", formData.id); // Crear referencia al documento con el ID especificado
      await setDoc(docRef, formData); // Guardar el documento con el ID especificado
      alert("Data successfully added!");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="id"
        value={formData.id}
        onChange={handleChange}
        placeholder="ID"
        required
      />
      <input
        type="text"
        name="code"
        value={formData.code}
        onChange={handleChange}
        placeholder="Code"
        required
      />
      <input
        type="text"
        name="principalName"
        value={formData.principalName}
        onChange={handleChange}
        placeholder="Principal Name"
        required
      />
      <input
        type="text"
        name="qrUrl"
        value={formData.qrUrl}
        onChange={handleChange}
        placeholder="url de QR"
        required
      />
      <h4>Acompanist</h4>
      {formData.acompanist.map((acomp, index) => (
        <div key={index}>
          <input
            type="text"
            name="name"
            value={acomp.name}
            onChange={(e) => handleAcompanistChange(index, e)}
            placeholder="Name"
            required
          />
          <input
            type="checkbox"
            name="asist"
            checked={acomp.asist}
            onChange={(e) => handleAcompanistChange(index, e)}
          />
          <input
            type="text"
            name="etiqueta"
            value={acomp.etiqueta}
            onChange={(e) => handleAcompanistChange(index, e)}
            placeholder="Etiqueta"
          />
          <button type="button" onClick={() => removeAcompanist(index)}>
            Remove
          </button>
        </div>
      ))}
      {formData.acompanist.length < 10 && (
        <button type="button" onClick={addAcompanist}>
          Add Acompanist
        </button>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default InviteForm;
