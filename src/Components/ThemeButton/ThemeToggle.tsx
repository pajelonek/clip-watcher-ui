import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import {useTheme} from "@mui/material/styles";
import {ColorModeContext} from "../../App";

export default function ThemeToggle(props: any) {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);

    return (
        <IconButton sx={{ml: 1}} onClick={colorMode.toggleColorMode} color="inherit" {...props}>
            {theme.palette.mode === 'dark' ? <Brightness7Icon/> : <Brightness4Icon/>}
        </IconButton>
    );
}
