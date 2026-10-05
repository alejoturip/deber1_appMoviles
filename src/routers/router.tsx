import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Modulo1Page } from "../pages/Modulo1Page";
import { Modulo2Page } from "../pages/Modulo2Page";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/modulo1", element: <Modulo1Page /> },
  { path: "/modulo2", element: <Modulo2Page /> },
]);
