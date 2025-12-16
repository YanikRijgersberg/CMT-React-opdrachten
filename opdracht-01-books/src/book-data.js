import hobbit from "/images/the hobbit.jpg";
import dune from "/images/Dune.jpg";
import davinci from "/images/the da vinci code.jpg";
import twilight from "/images/Twilight.avif";
// import crusoe from "/images/Robinson Crusoe.jpg";

export const booksData = [
  {
    id: 1,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    image: hobbit,
    category: "Fantasy",
    year: 1937,
    pages: 310,
    description:
      "The Hobbit volgt Bilbo Baggins, een hobbit die onverwacht op avontuur gaat met een groep dwergen. Samen proberen ze een schat terug te winnen die wordt bewaakt door de draak Smaug. Het verhaal zit vol magie, vriendschap en gevaarlijke ontmoetingen."
  },
  {
    id: 2,
    title: "Dune",
    author: "Frank Herbert",
    image: dune,
    category: "Sciencefiction",
    year: 1965,
    pages: 412,
    description:
      "Dune speelt zich af op de woestijnplaneet Arrakis, waar het waardevolle kruid ‘melange’ wordt gewonnen. Paul Atreides raakt verwikkeld in politieke intriges, machtsspelletjes en een strijd om de toekomst van het universum."
  },
  {
    id: 3,
    title: "The Da Vinci Code",
    author: "Dan Brown",
    image: davinci,
    category: "Thriller",
    year: 2003,
    pages: 454,
    description:
      "Professor Robert Langdon raakt betrokken bij een mysterie na een moord in het Louvre. Samen met cryptologe Sophie Neveu ontrafelt hij eeuwenoude geheimen verborgen in kunst, religie en symboliek."
  },
  {
    id: 4,
    title: "Twilight",
    author: "Stephenie Meyer",
    image: twilight,
    category: "Romance",
    year: 2005,
    pages: 498,
    description:
      "Twilight vertelt het verhaal van Bella Swan, die verliefd wordt op de mysterieuze Edward Cullen. Al snel ontdekt ze dat hij een vampier is, wat hun relatie gevaarlijk en ingewikkeld maakt."
  },
  // {
  //   id: 5,
  //   title: "Robinson Crusoe",
  //   author: "Daniel Defoe",
  //   image: crusoe,
  //   category: "Avontuur",
  //   year: 1719,
  //   pages: 320,
  //   description:
  //     "Robinson Crusoe overleeft een schipbreuk en strandt op een onbewoond eiland. Hij leert te overleven, bouwt een nieuw leven op en reflecteert op eenzaamheid, geloof en menselijkheid."
  // }
];

export default booksData;
