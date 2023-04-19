import axios from "axios";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./root_reducer";
import * as api from '../config';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root', 
    storage,
    whitelist: ['theme', 'controls']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, composeEnhancer(
    applyMiddleware(
        thunk.withExtraArgument({
            client: axios,
            api,
        })
    )
))

export {store}
export const persister = persistStore(store);
