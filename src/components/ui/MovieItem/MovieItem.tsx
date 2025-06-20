import React from "react";
import { NavLink } from "react-router-dom";

import { PATHS } from "../../../constants/constants";
import type { IFilm } from "../../../types/types";
import styles from "./MovieItem.module.css";

interface IProps {
  item: IFilm;
}

const MovieItem: React.FC<IProps> = ({ item }) => {
  return (
    <NavLink to={`${PATHS.movie}/${item.kinopoiskId}`}>
      <div className={styles.movieItem}>
        <img className={styles.poster} src={item.posterUrl} alt='poster' />
        <span className={styles.name}>{item.nameRu}</span>
        <span className={styles.year}>{item.year}</span>
      </div>
    </NavLink>
  );
};

export default MovieItem;
