import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import {useTheme} from "@mui/material/styles";
import {ColorModeContext} from "../../App";
import {useNavigate} from "react-router-dom";
import Grid from "@mui/material/Grid";
// todo add some sort of provider for theme, to make test easier
export default function Header(props: any) {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    let history = useNavigate();

    function handlePopoverOpen() {
        const cursor: any = document.querySelector('body');
        if (cursor) {
            cursor.style.cursor = 'pointer';
        }
    }

    function handlePopoverClose() {
        const cursor: any = document.querySelector('body');
        if (cursor) {
            cursor.style.cursor = 'auto';
        }
    }

    return (
        <AppBar
            position="static"
            id={"header-AppBar"}
            sx={{
                bgcolor: (theme: any) => `${theme.palette.navbar.main}`,
                borderBottom: (theme) => `1.5px solid ${theme.palette.divider}`
            }} {...props}>
            {/*// todo after navigation to main page, reset context*/}
            <Toolbar>
                <Grid container>
                    <Grid item xs={6}>
                        <Typography variant="h6" color="inherit" onClick={() => history("/")} display={"inline"}
                                    onMouseEnter={handlePopoverOpen}
                                    onMouseLeave={handlePopoverClose}>
                            Clip Watcher
                        </Typography>
                    </Grid>
                    <Grid item xs={6} textAlign={"right"}>
                        <IconButton sx={{ml: 1}} onClick={colorMode.toggleColorMode} color="inherit">
                            {theme.palette.mode === 'dark' ? <Brightness7Icon/> : <Brightness4Icon/>}
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}