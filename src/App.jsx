import { Headers } from "./components/headers";
import { Home } from "./components/home";
import { About } from "./components/about";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Signup } from "./features/signup";
import { Login } from "./features/login";

export const App = () => {
  return (
    <div className="bg-[#f7f4dd] min-h-screen">
      <Router>
        <Headers />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};
