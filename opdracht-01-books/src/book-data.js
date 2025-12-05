import hobbit from "/images/the hobbit.jpg";
import dune from "/images/Dune.jpg";
import davinci from "/images/the da vinci code.jpg";
import twilight from "/images/Twilight.avif";
// import crusoe from "images/Robinson Crusoe.jpg";


export const booksData = [
  {
    id: 1,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    image: hobbit,
    category: "Fantasy"
  },
  {
    id: 2,
    title: "Dune",
    author: "Frank Herbert",
    image: dune,
    category: "Sciencefiction"
  },
  {
    id: 3,
    title: "The Da Vinci Code",
    author: "Dan Brown",
    image: davinci,
    category: "Thriller"
  },
  {
    id: 4,
    title: "Twilight",
    author: "Stephenie Meyer",
    image: twilight,
    category: "Romance"
  },
  // {
  //   id: 5,
  //   title: "Robinson Crusoe",
  //   author: "Daniel Defoe",
  //   image: crusoe,
  //   category: "Avontuur"
  // }
];

export default booksData;