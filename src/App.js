import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./components/Header/index";
import Dashboard from "./pages/Dashboard";
import Search from "./pages/Search";
import Home from "./pages/Home";
import CoinPage from "./pages/CoinPage";
import AnimCursor from "./components/AnimCursor";

function App() {
  return (
    <div>
      <AnimCursor />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/search" element={<Search />} />
          <Route path="/coin" element={<CoinPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
