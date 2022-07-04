import * as React from "react";
import {Box, Typography} from "@mui/material";
import {selectCategory, selectPeriod} from "../../../Services/Redux/filterSlice";
import {useSelector} from "react-redux";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function SideBarFilterList() {

    const filterState = {
        period: useSelector(selectPeriod),
        category: useSelector(selectCategory),
        cursor: {
            value: ''
        },
    };

    return (
        <Box sx={{
            display: 'block', flexWrap: 'nowrap',
            p: 1, m: 1,
            maxWidth: 300
        }}>
            <Typography>Applied filters: </Typography>
            <List>
                { filterState.period !== undefined ? <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary={filterState.period}/>
                    </ListItemButton>
                </ListItem> : null}
                { filterState.category  !== undefined ? <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemText primary={filterState.category.name}/>
                    </ListItemButton>
                </ListItem> : null}
            </List>
        </Box>
    );
}