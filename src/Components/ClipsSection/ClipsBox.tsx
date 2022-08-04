import * as React from "react";
import Grid from "@mui/material/Grid";
import Clip from "./Clip";
import ClipsNotFoundComponent from "./ClipsNotFoundComponent/ClipsNotFoundComponent";

interface ClipsBoxProps {
    clips: []
}

export default function ClipsBox(props: ClipsBoxProps) {

    return (
        <Grid id={"clipsBox-container"} container>
            {
                props.clips.length === 0 ?
                    <ClipsNotFoundComponent/> :
                    props.clips.map((clip: any) => (
                        <Grid item key={clip.id} xs={12} sm={6} md={4} lg={3}>
                            <Clip clip={clip}/>
                        </Grid>))
            }
        </Grid>
    );

}