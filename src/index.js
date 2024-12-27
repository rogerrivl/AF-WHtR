import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Use 'react-router-dom'
import App from "./App";
import Fitness from "./components/Fitness"; // Ensure correct import
import About from "./components/About"; // Ensure correct import
import Calculator from "./components/Calculator"; // Ensure correct import

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Calculator />} /> {/* Calculator page */}
        <Route path="fitness" element={<Fitness />} /> 
        <Route path="about" element={<About />} /> {/* About page */}
        <Route path="calculator" element={<Calculator />} /> {/* Calculator page */}
      </Route>
      <Route path="*" element={<div>Page Not Found</div>} /> {/* Handle 404 */}
    </Routes>
  </BrowserRouter>
);
