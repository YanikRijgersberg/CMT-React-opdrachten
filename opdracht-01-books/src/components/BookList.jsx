// const Book = ({ title, beschrijving, img }) => {
//     return ( 
//     <section className="
//     book">
//     <img className="imgbooks" src={img} alt={title} />
//     <h2>{title}</h2>
//     <p>{beschrijving}</p>
//     </section> 
//     );
// }
 
// export default Book;
import { useState } from "react";

function BookList() {
  const [books] = useState([
    {
      id: 1,
      title: "harry snotter",
      author: "j.k. rowling",
      image: "./public/images/book-1.png",
    },
    {
      id: 2,
      title: "fantasia 6",
      author: "geronimo stilton",
      image: "./public/images/book-2.png",
    },
    {
      id: 3,
      title: "honger spellen",
      author: "suzanne collins",
      image: "./public/images/book-3.png",
    },
  ]);

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
