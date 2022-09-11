import { configureStore } from '@reduxjs/toolkit';
import { twitchApi } from './twitchApi';
import filterReducer from '../Services/Reducers/filterSlice';
import cursorReducer from '../Services/Reducers/cursorSlice';
import pageReducer from '../Services/Reducers/pageSlice';

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        cursor: cursorReducer,
        page: pageReducer,
        [twitchApi.reducerPath]: twitchApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(twitchApi.middleware),
})
