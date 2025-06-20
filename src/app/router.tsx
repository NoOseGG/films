import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../components/pages/ErrorPage/ErrorPage";
import MoviePage from "../components/pages/MoviePage/MoviePage";
import MoviesPage from "../components/pages/MoviesPage/MoviesPage";
import Layout from "../components/ui/Layout/Layout";
import { PATHS } from "../constants/constants";

export const router = createBrowserRouter([
  {
    path: PATHS.home,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: PATHS.top100movies,
        element: <MoviesPage />,
      },
      {
        path: PATHS.movies,
        element: <MoviesPage />,
      },
      {
        path: PATHS.serials,
        element: <MoviesPage />,
      },
      {
        path: `${PATHS.movie}/:id`,
        element: <MoviePage />,
      },
    ],
  },
]);
