import "./index.css";
import Home from "./Routes/Home";
import { Route, Routes } from "react-router-dom";
import About from "./Routes/About";
import Contact from "./Routes/Contact";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
