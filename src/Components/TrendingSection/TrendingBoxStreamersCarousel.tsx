import Grid from "@mui/material/Grid";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import StreamersCarouselElement from "./StreamersCarouselElement";
import * as React from "react";

interface TrendingBoxStreamersCarouselProps {
    streamers: []
}
export default function TrendingBoxStreamersCarousel(props: TrendingBoxStreamersCarouselProps) {

    const responsive = {
        largeDesktop: {
            breakpoint: { max: 3000, min: 1220 },
            items: 6,
        },
        desktop: {
            breakpoint: { max: 1220, min: 850 },
            items: 4,
        },
        largeTablet: {
            breakpoint: { max: 850, min: 640 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 640, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
    };

    if (!props.streamers) {
        return (<div/>);
    }
    else return (
        <Grid id={"carouselStreamersBox"} item sm={12} xs={12} width={"100%"} height={"100%"} marginBottom={"2%"}>
            <Carousel
                className={"streamersCarousel"}
                swipeable={false}
                draggable={true}
                showDots={false}
                arrows={false}
                responsive={responsive}
                ssr={false} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={false}
            >
                {
                    props.streamers ?
                        props.streamers.map((key, index, streamer: any) => (
                            <StreamersCarouselElement key={key} index={index} text={streamer.user_name} streamer={streamer[index]}/>
                        ))
                        : <div/>
                }
            </Carousel>
        </Grid>
    );
}