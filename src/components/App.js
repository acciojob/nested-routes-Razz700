
import React from "react";
import './../styles/App.css';
import { Link, Route, Routes } from "react-router-dom";
import Women from "./Women";
import Home from "./Home";

const App = () => {
  return (
    <div>
      Hello,world! gggg
      <ul>
        <li><Link to='' >Home</Link></li>
        <li><Link to='/Women' >Women</Link></li>
      </ul>
      <Routes>
        <Route path="/Women/*" element={<Women />} />
        <Route path="/" element={<Home />} />
      </Routes>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
