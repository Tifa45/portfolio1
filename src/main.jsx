import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { path } from "motion/react-client";
import SceeneDetails from "./sections/sceene-details.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/sceene-details", element: <SceeneDetails /> },
]);


createRoot(document.getElementById("root")).render(
  // <StrictMode>
  
    <RouterProvider router={router} />
 
  // </StrictMode>,
);
