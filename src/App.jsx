import "./App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [getData, setData] = useState([]);

  return (
    <div className="font-[poppins] scroll-smooth">
      <Header />
      <Outlet context={{ getData, setData }} />
      <Footer />
    </div>
  );
}

export default App;
