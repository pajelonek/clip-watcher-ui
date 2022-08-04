import * as React from "react";
import {Box, Typography} from "@mui/material";
import {selectCategory, selectChannelState, selectPeriod} from "../../../Services/Reducers/filterSlice";
import {useSelector} from "react-redux";
import Grid from "@mui/material/Grid";
import SideBarFilterListTypographyBoxes from "./SideBarFilterListTypographyBoxes";

export default function SideBarFilterList() {

    const filterState = {
        period: useSelector(selectPeriod),
        category: useSelector(selectCategory),
        channel: useSelector(selectChannelState),
        cursor: {
            value: ''
        },
    };

    const filterBoxStyles = {
        border: '1px solid grey',
        backgroundColor: (theme: any) => theme.palette.mode === 'dark' ? "red" : "#1879d9",
        color: "white",
        borderRadius: '16px'
    };

    return (
        <Box sx={{
            paddingTop: '1',
            m: 1,
        }}>
            <Grid container
                  alignItems="center"
                  justifyContent="center">
                <Grid item xs={12} p={1}>
                    <Typography>Active filters: </Typography>
                </Grid>
                <Grid item xs={12} padding={"2px"}>
                    <Grid container spacing={1}>
                        <Grid item>
                            {filterState.period !== undefined ?
                                <Box sx={{...filterBoxStyles}} marginLeft={"2%"} marginRight={"2%"}
                                     textAlign={"center"}>
                                    <SideBarFilterListTypographyBoxes display_name={filterState.period}/>
                                </Box> : null}
                        </Grid>
                        {filterState.category.name !== '' ?
                            <Grid item>
                                <Box sx={{...filterBoxStyles}} textAlign={"center"}>
                                    <SideBarFilterListTypographyBoxes display_name={filterState.category.name}/>
                                </Box>
                            </Grid> : <div/>}
                        {filterState.channel.isSelected !== false ?
                            <Grid item>
                                <Box sx={{...filterBoxStyles}} textAlign={"center"}>
                                    <SideBarFilterListTypographyBoxes
                                        display_name={filterState.channel.selectedChannel.display_name}/>
                                </Box>
                            </Grid> : <div/>}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}