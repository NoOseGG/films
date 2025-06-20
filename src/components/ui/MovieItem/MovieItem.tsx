import React from "react";

import type { IFilm } from "../../../types/types";
import styles from "./MovieItem.module.css";

interface IProps {
  item: IFilm;
}

const MovieItem: React.FC<IProps> = ({ item }) => {
  return (
    <div className={styles.movieItem}>
      <img className={styles.poster} src={item.posterUrl} alt='poster' />
      <span className={styles.name}>{item.nameRu}</span>
      <span className={styles.year}>{item.year}</span>
    </div>
  );
};

export default MovieItem;
