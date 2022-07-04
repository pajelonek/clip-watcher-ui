import { configureStore } from '@reduxjs/toolkit';
import { twitchApi } from './twitchApi';
import filterReducer from './filterSlice';
import cursorReducer from './cursorSlice';
import pageReducer from './pageSlice';


// import * as storage from 'redux-storage'
// import { createStore, applyMiddleware, combineReducers } from 'redux';

// const engine = createEngineLocalStorage('clip-watcher-ui-test')
// const storageMiddleware = storage.createMiddleware(engine)

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        cursor: cursorReducer,
        page: pageReducer,
        [twitchApi.reducerPath]: twitchApi.reducer,
    },
    // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(twitchApi.middleware),
})
