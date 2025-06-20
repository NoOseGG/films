import React from "react";
import { useRouteError } from "react-router-dom";

import styles from "./ErrorPage.module.css";

const ErrorPage: React.FC = () => {
  const error = useRouteError();
  return <div>Ошибка</div>;
};

export default ErrorPage;
