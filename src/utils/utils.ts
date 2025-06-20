import { PATHS } from "../constants/constants";

interface ITopMenu {
  name: string;
  path: string;
}

export const TOP_MENU: ITopMenu[] = [
  {
    name: "Фильмы",
    path: PATHS.movies,
  },
  {
    name: "Сериалы",
    path: PATHS.serials,
  },
  {
    name: "Топ 100 фильмов",
    path: PATHS.top100movies,
  },
];
