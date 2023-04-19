import axios from "axios";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

import * as api from './config';
import { themeReducer } from "./features/theme/theme-slice";
import { controlsReducer } from "./features/controls/controls-slice";
import { countryReducer } from "./features/countries/countries-slice";
import { detailsReducer } from "./features/details/details-slice";

const rootReducer = combineReducers({
    theme: themeReducer,
    controls: controlsReducer,
    countries: countryReducer,
    details: detailsReducer,
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [
              FLUSH,
              REHYDRATE,
              PAUSE,
              PERSIST,
              PURGE,
              REGISTER,
            ]
          },
        thunk: {
            extraArgument: {
                client: axios,
                api,
            },
        },
        // serializableCheck: false,
    })
})

export const persistor = persistStore(store);