import "./App.css";
import Aside from "./pages/Aside.jsx";
import About from "./pages/components/About.jsx";
import Contact from "./pages/components/Contact.jsx";
import LatestNews from "./pages/components/LatestNews.jsx";
import Main from "./pages/Main.jsx";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Main />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/latestNews" element={<LatestNews />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Aside />
    </div>
  );
}

export default App;
