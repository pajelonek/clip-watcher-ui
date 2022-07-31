import Grid from "@mui/material/Grid";
import Clip from "./Clip";
import BouncingDotsLoader from "../BouncingDotsLoader/BouncingDotsLoader";
import * as React from "react";

interface ClipsContainerProps {
    clips: [],
    loadingClips: boolean,
    isUninitialized: boolean,
    isFetching: boolean,
    dataTestId: string
}
export default function ClipsContainer(props: ClipsContainerProps) {

    return (
        <Grid id={"clipsContainer-container"} container spacing={0} data-testid={props.dataTestId}>
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