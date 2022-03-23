import './App.css';
import MainPage from "./Pages/MainPage";
import * as React from "react";
import {ThemeProvider, createTheme} from '@mui/material/styles';

export const ColorModeContext = React.createContext({
    toggleColorMode: () => {}
});

function App() {
    const [mode, setMode] = React.useState('light');

    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <div className="App">
                    <MainPage colorModeContext={ColorModeContext}/>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
