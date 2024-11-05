import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ContextPlay from "./context/ContextPlay";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextPlay>
      <App />
    </ContextPlay>
  </StrictMode>
);
