import './App.css'
import Book from './components/Book'


function App() {

  return (
    <>
      <h1>Opdracht 1 - Books</h1>

      <Book img="./public/images/book-1.png" title="harry snotter" beschrijving="leuk booek voor een tover kind"/>
      <Book img="./public/images/book-2.png" title="fantasia 6" beschrijving="leuk dik boek over een interesante wereld "/>
      <Book img="./public/images/book-3.png" title="the hunger games" beschrijving="honger spelen"/>
    </>
  )
}

export default App
