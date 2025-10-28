
import { useState } from "react";

function BookList() {
  const [books] = useState();

  return (
    <section className="booklist">
      {books.map((book) => (
        <div key={book.id} className="book-card">
          <img src={book.image} alt={book.title} />
          <h3>{book.title}</h3>
          <p>{book.author}</p>
        </div>
      ))}
    </section>
  );
}

export default BookList;
