import Flipcardlist from "./components/Flipcardlist";
import data from "./data"

function App() {
  return (
    <div className="min-h-screen bg-blue-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Flashcards</h1>
      <Flipcardlist data={data} />
    </div>
  );
}

export default App;
