import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import animals from '../animals.js';
import Card from '../components/Card.jsx';

const HomePage = () => {
  const navigate = useNavigate();

  // 🔍 zoekterm toevoegen
  const [searchTerm, setSearchTerm] = useState("");

  // 🦁 originele lijst
  const [animalList] = useState(animals);

  // 🔎 filter op naam
  const filteredAnimals = animalList.filter((animal) =>
    animal.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const goToDetail = (animalID) => {
    navigate(`/animal/${animalID}`);
  };

  return (
    <section>

      {/* Zoekbalk */}
      <input
        type="text"
        placeholder="Zoek een dier..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "8px", margin: "20px 0", width: "250px" }}
      />

      {/* Lijst met gefilterde dieren */}
      {filteredAnimals.map(animal => (
        <Card
          key={animal.id}
          animals={animal}
          onShowDetail={goToDetail}
        />
      ))}
    </section>
  );
};

export default HomePage;
