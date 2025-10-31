import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import animals from "../animals";

const DetailPage = () => {
  const { animalID } = useParams();
  const navigate = useNavigate();
  const [animalList] = useState(animals);

  const animal = animalList.find((a) => a.id === Number(animalID));

  if (!animal) {
    return <div>animal niet gevonden!</div>;
  }

  return (
    <section>
      <button onClick={() => navigate("/")}>← Terug naar home</button>

      <h1>{animal.name}</h1>
      <img src={animal.imageUrl} alt={animal.name} />
      <h2>habitat:{animal.habitat}</h2>
      <h2>diet:{animal.diet}</h2>
      <p>beschijving:{animal.description}</p>
    </section>
  );
};

export default DetailPage;
