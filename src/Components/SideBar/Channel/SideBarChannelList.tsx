import Grid from "@mui/material/Grid";
import ChannelFilter from "./ChannelFilter";
import * as React from "react";
import {Box} from "@mui/material";
import CategoryFilter from "../Category/CategoryFilter";
import SwapVertIcon from '@mui/icons-material/SwapVert';

export default function SideBarChannelList(props: any) {
    const sideBarChannelListStyles = {
        display: 'flex',
        flexWrap: 'wrap',
        p: 1,
        m: 1,
        maxWidth: '100%',
        borderRadius: 1
    };

    return (
        <Box sx={{...sideBarChannelListStyles}} {...props}>
            <Grid container>
                <Grid item key={'channelLabel'} xs={12}>
                    Category or Channel:
                </Grid>
                <Grid item key={'categoryFilter'} xs={12}>
                    <CategoryFilter/>
                </Grid>
                <Grid item key={'swapIcon'} xs={12} textAlign={"center"}>
                    <SwapVertIcon/>
                </Grid>
                <Grid item key={'channelFilter'} xs={12}>
                    <ChannelFilter/>
                </Grid>
            </Grid>
        </Box>
    );
}