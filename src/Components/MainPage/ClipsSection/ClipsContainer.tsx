import Grid from "@mui/material/Grid";
import Clip from "./Clip";
import BouncingDotsLoader from "../Common/BouncingDotsLoader";
import * as React from "react";

export default function ClipsContainer(props: any) {

    return (
        <Grid id={"clipsContainer-container"} container spacing={0} {...props}>
            {props.clips && !props.loadingClips && !props.isUninitialized && !props.isFetching ?
                props.clips.map((clip: any) => (
                    <Grid item key={clip.id} xs={12} sm={6} md={4} lg={3}>
                        <Clip clip={clip}/>
                    </Grid>)) :
                <Grid id={"clipsContainer-bouncingDotsLoaderContainer"} item key={'loader'} xs={12}>
                    <BouncingDotsLoader/>
                </Grid>
            }
        </Grid>
    );

}