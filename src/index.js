import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { GlobalContextProvider } from "./context/ReactContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>  
    <GlobalContextProvider>
    <HelmetProvider>
        <App />
    </HelmetProvider>
    </GlobalContextProvider>    
    </BrowserRouter>
  </React.StrictMode>
);
