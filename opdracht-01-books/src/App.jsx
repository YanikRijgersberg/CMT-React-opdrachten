import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Navigation from './pages/Navigtion';
import About from './pages/About';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Home from './pages/Home';
import './App.css'
function App() {
 
  return (
    <BrowserRouter>
    <Routes className="header">
      <Route path='/' element={<Navigation />} >
      <Route index element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />
       
       <Route path="/home" element={<Home />} />
       <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
    </BrowserRouter>
   
  );
}
export default App;
 
 