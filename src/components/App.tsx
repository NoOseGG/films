import { Normalize } from "styled-normalize";

import { RouterProvider } from "react-router-dom";

import { router } from "../app/router";
import "./App.css";

function App() {
  return (
    <>
      <Normalize />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
