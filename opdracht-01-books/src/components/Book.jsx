import { useState } from "react";

const Book = ({ img, title, author, category }) => {
  const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0);

  const [liked, setLiked] = useState(false);

  const verhoogLeesTeller = () => {
    setAantalKeerGelezen(aantalKeerGelezen + 1);
  };

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h3>{author}</h3>
      <p>Categorie: {category}</p>

      <button onClick={verhoogLeesTeller}>
        Aantal keer gelezen: {aantalKeerGelezen}
      </button>

      {/* Favoriet sectie */}
      <div className="favorite-section">
        <button onClick={toggleLike}>
          {liked ? "❤️" : "🤍"}
        </button>

        {liked && (
          <p className="favorited-text">
            Toegevoegd aan favorieten
          </p>
        )}
      </div>
    </article>
  );
};

export default Book;
