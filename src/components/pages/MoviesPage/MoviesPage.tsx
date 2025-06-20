import React from "react";

import { useGetFilmsQuery } from "../../../services/filmsApi";
import MovieItem from "../../ui/MovieItem/MovieItem";
import styles from "./MoviesPage.module.css";

const MoviesPage: React.FC = () => {
  const { data, error, isLoading } = useGetFilmsQuery();

  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <div className={styles.moviesPage}>
            {data.items.map(item => {
              return <MovieItem item={item} />;
            })}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default MoviesPage;
