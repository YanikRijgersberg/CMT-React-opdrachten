import './App.css'
import HomePage from './pages/HomePage.jsx';
import DetailPage from './pages/DetailPage.jsx';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/animal/:animalID" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
