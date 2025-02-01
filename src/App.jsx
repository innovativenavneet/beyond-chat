import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/register";
import Setup from "./pages/setup";
import Integration from "./pages/integration";
import Success from "./pages/success";
import ScrapingStatus from "./pages/ScrapingStatus";
import IntegrationInstructions from "./pages/IntegrationInstructions";

const App = () => {
  const [clientName, setClientName] = useState("");

  return (
    <Routes>
      <Route path="/" element={<Register setClientName={setClientName} />} />
      <Route path="/setup" element={<Setup clientName={clientName} />} />
      <Route path="/integration" element={<Integration clientName={clientName} />} />
      <Route path="/success" element={<Success clientName={clientName} />} />
      <Route path="/ScrapingStatus" element={<ScrapingStatus clientName={clientName} />} />
      <Route path="/IntegrationInstructions" element={<IntegrationInstructions clientName={clientName} />} />
    </Routes>
  );
};

export default App;