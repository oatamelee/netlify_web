// src/index.tsx

import React from "react";
import ReactDOM from "react-dom/client";
import AtmosphericEnergyGame from "./components/AtmosphericEnergyGame";
import "./index.css"; // Optional: add global styles

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AtmosphericEnergyGame />
  </React.StrictMode>
);
