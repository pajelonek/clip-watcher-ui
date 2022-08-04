import Grid from "@mui/material/Grid";
import BouncingDotsLoader from "../BouncingDotsLoader/BouncingDotsLoader";
import * as React from "react";
import ClipsBox from "./ClipsBox";

interface ClipsContainerProps {
    clips: [],
    isLoading: boolean,
    isSuccess: boolean
    isUninitialized: boolean,
    isFetching: boolean,
    dataTestId?: string
}
export default function ClipsContainer(props: ClipsContainerProps) {

    return (
        <Grid id={"clipsContainer-container"} container spacing={0} data-testid={props.dataTestId}>
            {
                props.clips && !props.isLoading && !props.isUninitialized && !props.isFetching ?
                        <ClipsBox clips={props.clips} /> :
                        <Grid id={"clipsContainer-bouncingDotsLoaderContainer"} item key={'loader'} xs={12}>
                            <BouncingDotsLoader/>
                        </Grid>
            }
        </Grid>
    );

}