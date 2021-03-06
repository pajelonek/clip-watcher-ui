import React, {PropsWithChildren} from 'react'
import {render} from '@testing-library/react'
import type {RenderOptions} from '@testing-library/react'
import {configureStore} from '@reduxjs/toolkit'
import type {PreloadedState} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'

import {RootState} from "@reduxjs/toolkit/dist/query/core/apiState";
import filterReducer from "../Services/Reducers/filterSlice";
import cursorReducer from "../Services/Reducers/cursorSlice";
import pageReducer from "../Services/Reducers/pageSlice";
import {twitchApi} from "../Middleware/twitchApi";
import {BrowserRouter} from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {darkTheme, lightTheme} from "../Assets/Themes/theme";
import {ColorModeContext} from "../App";

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
            },
            middleware: (getDefaultMiddleware) =>
                getDefaultMiddleware().concat(twitchApi.middleware),
            preloadedState
        }),
        ...renderOptions
    }: ExtendedRenderOptions = {}
) {
    function Wrapper({children}: PropsWithChildren<{}>): JSX.Element {
        const [mode, setMode] = React.useState('dark');

        const colorMode = React.useMemo(
            () => ({
                toggleColorMode: () => {
                    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
                },
            }), [],);

        const theme = React.useMemo(
            () =>
                createTheme({
                    palette: {
                        ...(mode === 'light' ? lightTheme : darkTheme)
                    },
                }), [mode],
        );

        return (
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <Provider store={store}>
                            {children}
                        </Provider>
                    </BrowserRouter>
                </ThemeProvider>
            </ColorModeContext.Provider>
        );
    }

    return {store, ...render(ui, {wrapper: Wrapper, ...renderOptions})}
}