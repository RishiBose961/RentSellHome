import React from "react";
import { Outlet} from "react-router-dom";
import Navbar from "./components/Navabr/Navbar";
import Footer from "./components/Footer/Footer";
import './App.css'

const App = () => {

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
