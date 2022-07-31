import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {useNavigate} from "react-router-dom";
import Grid from "@mui/material/Grid";
import ThemeToggle from "../../Components/ThemeButton/ThemeToggle";

export default function Header(props: any) {
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

    function handleOnClick() {
        history("/");
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
                        <Typography id={"typographyLogo"}
                                    variant="h6"
                                    color="inherit"
                                    display={"inline"}
                                    onClick={handleOnClick}
                                    onMouseEnter={handlePopoverOpen}
                                    onMouseLeave={handlePopoverClose}>
                            Clip Watcher
                        </Typography>
                    </Grid>
                    <Grid item xs={6} textAlign={"right"}>
                        <ThemeToggle id={"headerThemeToggle"}/>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}