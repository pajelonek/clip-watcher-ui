import React, {PropsWithChildren} from 'react'
import {render} from '@testing-library/react'
import type {RenderOptions} from '@testing-library/react'
import {configureStore} from '@reduxjs/toolkit'
import type {PreloadedState} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
// As a basic setup, import your same slice reducers
import {RootState} from "@reduxjs/toolkit/dist/query/core/apiState";
import filterReducer from "../Services/Redux/filterSlice";
import cursorReducer from "../Services/Redux/cursorSlice";
import pageReducer from "../Services/Redux/pageSlice";
import {twitchApi} from "../Services/Redux/twitchApi";

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
    preloadedState?: PreloadedState<RootState<any, any, any>>
    store?: any
}

export function renderWithProviders(
    ui: React.ReactElement,
    {
        preloadedState = {},
        // Automatically create a store instance if no store was passed in
        store = configureStore({
            reducer: {
                filter: filterReducer,
                cursor: cursorReducer,
                page: pageReducer,
                [twitchApi.reducerPath]: twitchApi.reducer,
            }, preloadedState
        }),
        ...renderOptions
    }: ExtendedRenderOptions = {}
) {
    function Wrapper({children}: PropsWithChildren<{}>): JSX.Element {
        return <Provider store={store}>{children}</Provider>
    }

    // Return an object with the store and all of RTL's query functions
    return {store, ...render(ui, {wrapper: Wrapper, ...renderOptions})}
}