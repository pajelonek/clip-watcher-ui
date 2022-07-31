import Grid from "@mui/material/Grid";
import ChannelFilter from "./ChannelFilter";
import * as React from "react";
import {Box} from "@mui/material";

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
                    Channel:
                </Grid>
                <Grid item key={'channelFilter'} xs={12}>
                    <ChannelFilter/>
                </Grid>
            </Grid>
        </Box>
    );
}