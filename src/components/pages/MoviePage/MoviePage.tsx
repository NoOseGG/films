import React from "react";
import { useParams } from "react-router-dom";

import { useGetFilmByIdQuery } from "../../../services/filmsApi";
import styles from "./MoviePage.module.css";

const MoviePage: React.FC = () => {
  const { id } = useParams<IParams>();
  const { data, error, isLoading } = useGetFilmByIdQuery(id || "");

  if (!id) {
    return <div>Error: ID is missing</div>;
  }

  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <div className={styles.movie}>
            <div className={styles.top}>
              <img
                className={styles.poster}
                src={data.posterUrl}
                alt={data.nameRu}
              />
              <div className={styles.info}>
                <div className={styles.infoRating}>
                  <span>IMBD: {data.ratingImdb || "-"}</span>
                  <span>Kinopoisk: {data.ratingKinopoisk}</span>
                </div>
                <div>Год: {data.year}</div>
                <span>
                  Жанр:{" "}
                  {data.genres.map((item, index) => (
                    <span>
                      {item.genre}
                      {index === data.genres.length - 1 ? "." : ","}{" "}
                    </span>
                  ))}
                </span>
              </div>
            </div>
            <div className={styles.description}>{data.description}</div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default MoviePage;
