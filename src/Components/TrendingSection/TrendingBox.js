import * as React from "react";
import Grid from "@mui/material/Grid";
import './TrendingBox.css';
import {Paper} from "@mui/material";
import {useTopStreamsQuery} from "../../Middleware/twitchApi";
import TrendingBoxCarousel from "./TrendingBoxCarousel";
import Typography from "@mui/material/Typography";
import TrendingBoxStreamersCarousel from "./TrendingBoxStreamersCarousel";

export default function TrendingBox(props) {
    const {data, isLoading, isUninitialized, isFetching, isSuccess} = useTopStreamsQuery();
    console.log("trending box render");
    return (
        data && !isLoading && !isUninitialized && !isFetching && isSuccess ?
        <Paper variant="outlined" square
               sx={{
                   bgcolor: (theme) => `${theme.palette.trendingBoxColor.main}`,
                   boxShadow: 1,
                   borderBottom: (theme) => `2px solid ${theme.palette.divider}`,
               }} {...props}>
            <Grid container id={"carouselContainer"} style={{textAlign: 'center', margin: 'auto'}} >
                <TrendingBoxStreamersCarousel streamers={data.data} />
                <Grid item xs={12} justifyContent={"center"} textAlign={"center"} marginBottom={"2%"}  width={'150vh'}>
                    <Typography variant={"h3"} align={"center"}>
                        Check out trending streams!
                    </Typography>
                </Grid>
                <TrendingBoxCarousel streamArray={data.data}/>
            </Grid>
        </Paper>
            : <div/>
    );
}