// src/components/CreateMessage.jsx
import { useState } from "react";

const CreateMessage = ({ messages, setMessages }) => {
  const [formData, setFormData] = useState({
    name: "",
    text: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.text.trim() === "" || formData.name.trim() === "") return;

    const newMessage = {
      id: Date.now(),
      name: formData.name,
      text: formData.text
    };

    setMessages([...messages, newMessage]);

    // inputvelden resetten
    setFormData({
      name: "",
      text: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Naam:
          <input 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="naan"
          />
        </label>
      </div>

      <div>
        <label>
          Bericht:
          <input 
            type="text"
            name="text"
            value={formData.text}
            onChange={handleChange}
            placeholder="tekst"
          />
        </label>
      </div>

      <button type="submit">Verstuur</button>
    </form>
  );
};

export default CreateMessage;
