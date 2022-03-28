import Grid from "@mui/material/Grid";
import ChannelFilter from "./ChannelFilter";
import * as React from "react";
import {Box} from "@mui/material";

export default function SideBarChannelList() {
    return (
        <Box xs={3} lg={12} sx={{
            display: 'flex', flexWrap: 'wrap',
            p: 1, m: 1, bgcolor: 'background.paper',
            maxWidth: 300, borderRadius: 1
        }}>
            <Grid container spacing={1}>
                <Grid item key={'channelLabel'} xs={12}>
                    Channels:
                </Grid>
                <Grid item key={'channelFilter'} xs={12}>
                    <ChannelFilter/>
                </Grid>
            </Grid>
        </Box>
    );
}