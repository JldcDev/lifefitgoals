/**
 * Entry point for the React application.
 * 
 * This file sets up the React application by rendering the root component
 * into the DOM. It includes the following key components:
 * 
 * - `React.StrictMode`: A wrapper that helps identify potential problems in the application.
 * - `BrowserRouter`: Provides routing capabilities for the application using React Router.
 * - `AuthProvider`: A context provider for managing authentication state across the app.
 * - `App`: The main application component.
 * - `Toaster`: A notification component from the `sonner` library for displaying toast messages.
 * 
 * The application is rendered into the DOM element with the ID `root`.
 */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";

import { Toaster } from 'sonner';


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
        <Toaster richColors position="top-right" />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
