import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Nopage from "./pages/NoPage";
import navbar from "./pages/navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={navbar}>
        <Route index path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
