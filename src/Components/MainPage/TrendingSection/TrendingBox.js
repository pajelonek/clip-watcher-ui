import * as React from "react";
import Grid from "@mui/material/Grid";
import './TrendingBox.css';
import {Paper} from "@mui/material";

export default function TrendingBox() {

    return (
        <Paper variant="outlined" square sx={{ bgcolor: (theme) => `${theme.palette.trendingBoxColor.main}`,boxShadow: 1, borderBottom: (theme) => `1px solid ${theme.palette.divider}`}}>
            <Grid container style={{marginTop: '2%', marginBottom: '2%', textAlign: 'center'}}>
                <Grid item xs={12}>
                    <iframe
                        title={"Not Interactive Embedded Twitch Player"}
                        src={"https://player.twitch.tv/?channel=xqcow&parent=" + window.location.hostname}
                        width="50%"
                        allowFullScreen>
                    </iframe>
                </Grid>
            </Grid>
        </Paper>
    );
}