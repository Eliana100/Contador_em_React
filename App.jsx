import React from "react";
import { Routes, Route } from "react-router-dom"; // Importando Routes e Route
import Contador from "./componentes/Contador";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Contador />} /> {/* Rota para o Contador */}
    </Routes>
  );
}

export default App;

