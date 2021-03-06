import * as React from "react";
import Grid from "@mui/material/Grid";
import './TrendingBox.css';
import {Paper} from "@mui/material";
import Carousel from 'react-material-ui-carousel';
import {useTopStreamsQuery} from "../../Middleware/twitchApi";
import ReactTwitchEmbedVideo from "react-twitch-embed-video"

export default function TrendingBox(props) {
    const {data, isLoading, isUninitialized, isFetching, isSuccess} = useTopStreamsQuery();

    return (
        data && !isLoading && !isUninitialized && !isFetching && isSuccess ?
        <Paper variant="outlined" square
               sx={{
                   bgcolor: (theme) => `${theme.palette.trendingBoxColor.main}`,
                   boxShadow: 1,
                   borderBottom: (theme) => `2px solid ${theme.palette.divider}`
               }} {...props}>
            <Grid container id={"carouselContainer"} style={{textAlign: 'center', margin: 'auto'}} width={'150vh'}>
                <Grid item xs={12} justifyContent={"center"} textAlign={"center"}>
                    <Carousel navButtonsAlwaysVisible={true} swipe={false} autoPlay={false} next={(now, previous) => {
                        // todo remove old, render new one
                    }}>
                        <ReactTwitchEmbedVideo width={'100%'} key={0} channel={data.data[0].user_login} autoplay={false} muted={true} targetId={"test"} />
                        <ReactTwitchEmbedVideo width={'100%'} key={1} channel={data.data[1].user_login} autoplay={false} muted={true} targetId={"hidden-form"} />
                    </Carousel>
                </Grid>
            </Grid>
        </Paper>
            : <div/>
    );
}