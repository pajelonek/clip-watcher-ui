import { configureStore } from '@reduxjs/toolkit';
import { clipsApi } from './clipsApi';
import periodReducer from './periodSlice';

// import * as storage from 'redux-storage'
// import { createStore, applyMiddleware, combineReducers } from 'redux';

// const engine = createEngineLocalStorage('clip-watcher-ui-test')
// const storageMiddleware = storage.createMiddleware(engine)

export const store = configureStore({
    reducer: {
        period: periodReducer,
        [clipsApi.reducerPath]: clipsApi.reducer,
    },
    // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(clipsApi.middleware),
})
