import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {useNavigate} from "react-router-dom";
import Grid from "@mui/material/Grid";
import ThemeToggle from "../../Components/ThemeButton/ThemeToggle";
import {clearPage} from "../../Services/Reducers/pageSlice";
import {clearCursorList} from "../../Services/Reducers/cursorSlice";
import {clearState} from "../../Services/Reducers/filterSlice";
import {useDispatch} from "react-redux";

export default function Header(props: any) {
    const dispatch = useDispatch();
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
        dispatch(clearPage());
        dispatch(clearCursorList());
        dispatch(clearState());
        history("/");
    }

    return (
        <AppBar
            position="static"
            id={"header-AppBar"}
            sx={{
                bgcolor: (theme: any) => theme.palette.mode === 'dark' ? `${theme.palette.navbar.main}` : '#5eafff',
                borderBottom: (theme) => `1.5px solid ${theme.palette.divider}`
            }} {...props}>
            <Toolbar>
                <Grid container>
                    <Grid item xs={6} sx={{margin: "auto"}}>
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