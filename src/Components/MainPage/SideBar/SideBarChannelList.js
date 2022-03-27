import Grid from "@mui/material/Grid";
import ChannelFilter from "./ChannelFilter";
import * as React from "react";

export default function SideBarChannelList() {
    return (
        <Grid item key={'ChannelList'} xs={12}>
            <Grid container spacing={1}>
                <Grid item key={'channelLabel'} xs={12}>
                    Channels:
                </Grid>
                <Grid item key={'channelFilter'} xs={12}>
                    <ChannelFilter/>
                </Grid>
            </Grid>
        </Grid>
    );
}