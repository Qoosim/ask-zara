import { Headers } from "./components/headers";
import { Home } from "./components/home";
import { About } from "./components/about";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <div className="bg-[#f7f4dd] min-h-screen">
      <Router>
        <Headers />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};
