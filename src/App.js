import MainPage from "./Pages/MainPage";
import * as React from "react";
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {Provider} from 'react-redux';
import {store} from "./Services/Redux/store";

export const ColorModeContext = React.createContext({
    toggleColorMode: () => {
    }
});

function App() {
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
                    mode,
                    ...(mode === 'light' ?
                        {
                            trendingBoxColor: {
                                main: "rgba(147,239,236,0.83)"
                            },
                            contentSectionColor: {
                                main: "#1976d2"
                            },
                            navbar: {
                                main: "#42a5f5",
                            }
                        } :
                        {
                            trendingBoxColor: {
                                main: "#242425"
                            },
                            contentSectionColor: {
                                main: "#242425"
                            },
                            background: {
                                paper: "#242425",
                                default: "#242425"
                            },
                            navbar: {
                                main: "#000",
                            }
                        })
                },
            }), [mode],
    );

    console.log('theme');
    console.log(theme);
    return (
        <Provider store={store}>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <div className="App">
                        <MainPage colorModeContext={ColorModeContext}/>
                    </div>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </Provider>
    );
}

export default App;