import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  animals  from '../animals.js';
import Card from '../components/Card.jsx';

const HomePage = () => {
  const navigate = useNavigate();
  const [animalList] = useState(animals);


  const goToDetail = (animalID) => {
    navigate(`/animal/${animalID}`);
  };

  return (
    <section>
      
      {animalList.map(animal => (
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

