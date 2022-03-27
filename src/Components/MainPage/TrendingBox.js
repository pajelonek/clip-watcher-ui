import * as React from "react";
import Grid from "@mui/material/Grid";

export default function TrendingBox() {
    // const Twitch = window.Twitch;
    // var options = {
    //     width: '640px',
    //     height: '480px',
    //     channel: "xqcow",
    //     parent: [window.location.hostname]
    // };
    // {new Twitch.Player("embedLivestream", options)}

    return (
        <Grid container xs={12} style={{marginTop: '2%', marginBottom: '2%', textAlign: 'center'}}>
            <Grid item xs={12}>
                <iframe
                    title={"non interactive player"}
                    src={"https://player.twitch.tv/?channel=xqcow&parent=" + window.location.hostname}
                    width="90%"
                    height="480px"
                    allowFullScreen>
                </iframe>
            </Grid>
        </Grid>
    );
}