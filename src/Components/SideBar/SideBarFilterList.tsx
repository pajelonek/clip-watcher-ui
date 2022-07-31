import * as React from "react";
import {Box, Typography} from "@mui/material";
import {selectCategory, selectChannelState, selectPeriod} from "../../Services/Reducers/filterSlice";
import {useSelector} from "react-redux";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function SideBarFilterList() {

    const filterState = {
        period: useSelector(selectPeriod),
        category: useSelector(selectCategory),
        channel: useSelector(selectChannelState),
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
            <Typography>Active filters: </Typography>
            <List sx={{display: "flex"}}>
                { filterState.period !== undefined ? <ListItem disablePadding >
                    <ListItemButton disabled sx={{width: "auto"}}>
                        <ListItemText primary={filterState.period}/>
                    </ListItemButton>
                </ListItem> : null}
                { filterState.category  !== undefined ? <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list" disabled sx={{width: "auto"}}>
                        <ListItemText primary={filterState.category.name}/>
                    </ListItemButton>
                </ListItem> : null}
                {filterState.channel.isSelected  === true ? <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list" disabled sx={{width: "auto"}}>
                        <ListItemText primary={filterState.channel.selectedChannel.display_name}/>
                    </ListItemButton>
                </ListItem> : null}
            </List>
        </Box>
    );
}