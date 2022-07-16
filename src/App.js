import * as React from "react";
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {Provider} from 'react-redux';
import {store} from "./Middleware/store";
import Main from "./Routes/Main";
import {darkTheme, lightTheme} from "./Assets/Themes/theme";

export const ColorModeContext = React.createContext({
    toggleColorMode: () => {}
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
                    ...(mode === 'light' ? lightTheme : darkTheme)
                },
            }), [mode],
    );

    return (
        <Provider store={store}>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <div className="App" id={"app-container"} data-testid={"app-container"}>
                        <Main colorModeContext={ColorModeContext}/>
                    </div>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </Provider>
    );
}

export default App;