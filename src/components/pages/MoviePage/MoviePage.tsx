import React from "react";
import { useParams } from "react-router-dom";

import { useGetFilmByIdQuery } from "../../../services/filmsApi";
import styles from "./MoviePage.module.css";

const MoviePage: React.FC = () => {
  const { id } = useParams();

  if (!id) {
    return <div>Error: ID is missing</div>; // или редирект, или null
  }

  const { data, error, isLoading } = useGetFilmByIdQuery(id);

  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <div>{data.nameRu}</div>
        </>
      ) : null}
    </div>
  );
};

export default MoviePage;
