import Grid from "@mui/material/Grid";
import Clip from "./Clip";
import BouncingDotsLoader from "../Common/BouncingDotsLoader";
import * as React from "react";

export default function ClipsContainer(props) {

    return (
        props.clips && !props.loadingClips && !props.isUninitialized && !props.isFetching ?
            props.clips.map((clip) => (
                <Grid item key={clip.id} xs={12} sm={6} md={4} lg={3}>
                    <Clip clip={clip}/>
                </Grid>)) :
            <Grid item key={'loader'} xs={12}>
                <BouncingDotsLoader/>
            </Grid>
    );

}