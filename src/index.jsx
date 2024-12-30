import App from "./App.jsx";
import "./styles/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <App />
    </>
  </StrictMode>
);
