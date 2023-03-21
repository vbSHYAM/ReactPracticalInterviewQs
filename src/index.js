import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Provider from "./components/contextapi/Provider";
import ContextProvider from "./components/contextapinew/ContextProvider";
import "./global.css";
// createRoot(document.getElementById("root")).render(
// <Provider>
// <App />
// </Provider>
// );

// ------------------------------------------

createRoot(document.getElementById("root")).render(<App/>)
