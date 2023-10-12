import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { CatalogueProvider } from "./context/CatalogueProvider.jsx";
import App from "./App";
import { AuthProvider } from "./context/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <CatalogueProvider>
        <App />
      </CatalogueProvider>
    </AuthProvider>
  </React.StrictMode>
);
