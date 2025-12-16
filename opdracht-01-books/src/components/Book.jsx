import { useState } from "react";

const Book = ({ img, title, author, category, description, year, pages }) => {
  const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0);
  const [liked, setLiked] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const verhoogLeesTeller = (e) => {
    e.stopPropagation();
    setAantalKeerGelezen(aantalKeerGelezen + 1);
  };

  const toggleLike = (e) => {
    e.stopPropagation();
    setLiked(!liked);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <article
      className={`book ${isFlipped ? "flipped" : ""}`}
      onClick={handleFlip}
    >
      <div className="book-inner">
        {/* VOORKANT */}
        <div className="book-front">
          <img src={img} alt={title} />
          <h2>{title}</h2>
          <h3>{author}</h3>
          <p>Categorie: {category}</p>

          <button onClick={verhoogLeesTeller}>
            Aantal keer gelezen: {aantalKeerGelezen}
          </button>

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
        </div>

        {/* ACHTERKANT */}
        <div className="book-back">
          <h2>Details</h2>
          <p><strong>Publicatiejaar:</strong> {year}</p>
          <p><strong>Pagina’s:</strong> {pages}</p>
          <p>{description}</p>
          <p><em>Klik om terug te gaan</em></p>
        </div>
      </div>
    </article>
  );
};

export default Book;
