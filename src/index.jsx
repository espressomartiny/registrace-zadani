import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import Registration from "./components/Registration";

const App = () => {
  return (
    <div className="container">
      <h1>Registration</h1>
      <Registration />
    </div>
  );
};

createRoot(document.querySelector("#app")).render(<App />);
