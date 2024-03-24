import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthProvider.jsx";
import ContentProvider from "./context/ContentProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <ContentProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ContentProvider>
    </AuthProvider>
  </BrowserRouter>
);
