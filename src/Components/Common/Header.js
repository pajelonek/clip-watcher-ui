import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import {useTheme} from "@mui/material/styles";
import {ColorModeContext} from "../../App";
import {Box} from "@mui/material";

export default function Header() {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);

    return (
        <AppBar
            position="static"
            sx={{
                bgcolor: (theme) => `${theme.palette.navbar.main}`,
                borderBottom: (theme) => `1.5px solid ${theme.palette.divider}`
            }}>
            <Toolbar sx={{flexWrap: 'wrap'}}>
                <Typography variant="h6" color="inherit" sx={{flexGrow: 1}}>
                    Clip Watcher
                </Typography>

                <IconButton sx={{ml: 1}} onClick={colorMode.toggleColorMode} color="inherit">
                    {theme.palette.mode === 'dark' ? <Brightness7Icon/> : <Brightness4Icon/>}
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}