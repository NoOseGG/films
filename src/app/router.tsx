import { createBrowserRouter } from "react-router-dom";

import MoviesPage from "../components/pages/MoviesPage/MoviesPage";
import Layout from "../components/ui/Layout/Layout";
import { PATHS } from "../constants/constants";

export const router = createBrowserRouter([
  {
    path: PATHS.home,
    element: (
      <Layout>
        <div>Привет</div>
      </Layout>
    ),
  },
  {
    path: PATHS.top100movies,
    element: (
      <Layout>
        <MoviesPage />
      </Layout>
    ),
  },
]);
