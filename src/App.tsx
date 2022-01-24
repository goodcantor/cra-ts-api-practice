import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import ExtraPage from "./pages/ExtraPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import ProductPage from "./pages/ProductPage";

import Api from "./pages/Api";

import Header from "./components/Header";
import ToDo from "./pages/ToDo";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/api" element={<Api />} />
        <Route path="/extra" element={<ExtraPage />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/api/:id" element={<ProductPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
