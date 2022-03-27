import * as React from "react";
import Grid from "@mui/material/Grid";
import './TrendingBox.css';

export default function TrendingBox() {

    return (
        <Grid container xs={12} style={{marginTop: '2%', marginBottom: '2%', textAlign: 'center'}}>
            <Grid item xs={12}>
                <iframe
                    title={"Not Interactive Embedded Twitch Player"}
                    src={"https://player.twitch.tv/?channel=xqcow&parent=" + window.location.hostname}
                    width="50%"
                    allowFullScreen>
                </iframe>
            </Grid>
        </Grid>
    );
}