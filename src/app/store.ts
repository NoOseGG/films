import { configureStore } from "@reduxjs/toolkit";

import settingsReducer from "../features/settings/settingsSlice";
import { filmsApi } from "../services/filmsApi";

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    [filmsApi.reducerPath]: filmsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(filmsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
