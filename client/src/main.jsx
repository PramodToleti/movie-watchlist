import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import MovieDetails from "./pages/MovieDetails.jsx";
import { Toaster } from "react-hot-toast";
import AddMovie from "./pages/AddMovie.jsx";
import EditMovie from "./pages/EditMovie.jsx";
import Layout from "./pages/Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "movies/:movieId", element: <MovieDetails /> },
      { path: "add-movie", element: <AddMovie /> },
      { path: "edit-movie/:movieId", element: <EditMovie /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster />
    <RouterProvider router={router} />
  </StrictMode>
);
