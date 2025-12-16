import { useState } from "react";
import BookData from "../book-data";
import Book from "./Book";
import BookCounter from "./BookCounter";

const BookList = () => {
  const [books, setBooks] = useState(BookData);
  const [searchInput, setSearchInput] = useState("");

  const SearchHandler = (e) => {
    const newSearch = e.target.value;
    setSearchInput(newSearch);

    const filteredBooks = BookData.filter((book) =>
      book.title.toLowerCase().includes(newSearch.toLowerCase())
    );

    setBooks(filteredBooks);
  };

  const categories = [
    "Alle",
    "Fantasy",
    "Avontuur",
    "Sciencefiction",
    "Thriller",
    "Romance",
  ];

  const [selectedCategory, setSelectedCategory] = useState("Alle");

  function filterHandler(e) {
    const category = e.target.value;
    setSelectedCategory(category);

    if (category === "Alle") {
      setBooks(BookData);
    } else {
      const filtered = BookData.filter((book) => book.category === category);
      setBooks(filtered);
    }
  }

  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="zoek hier uw boek"
          name="search"
          onChange={SearchHandler}
          value={searchInput}
        />
      </div>

      <div className="filter">
        <label htmlFor="category">Filter op categorie: </label>

        <select id="category" value={selectedCategory} onChange={filterHandler}>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <section className="booklist">
        <BookCounter aantal={books.length} />
        {books.map((book) => (
          <Book
            key={book.id}
            image={book.image}
            title={book.title}
            author={book.author}
            category={book.category}
            button={book.aantalKeerGelezen}
            btn={book.Btn}
            description={book.description}
            year={book.year}
            pages={book.pages}
          />
        ))}
      </section>
    </>
  );
};

export default BookList;
