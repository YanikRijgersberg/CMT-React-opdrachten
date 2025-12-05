import { useState } from "react";
const Book = ({ img, title, author, verhoogTeller,category }) => {
  const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0);
  function verhoogTeller() {
    setAantalKeerGelezen(aantalKeerGelezen + 1);
  }

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h3>{author}</h3>
      <p>Categorie: {category}</p>
      <button onClick={verhoogTeller}>Aantal keer gelezen: {aantalKeerGelezen}</button>
    </article>
    
  );
};
export default Book;