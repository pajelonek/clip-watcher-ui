import * as React from 'react';
import Carousel from "react-material-ui-carousel";
import ReactTwitchEmbedComponent from "./ReactTwitchEmbedComponent";


interface TrendingBoxCarouselPros {
    streamArray: any
}

export default function TrendingBoxCarousel(props: TrendingBoxCarouselPros) {
    const [indexOfTrendingBox, setIndexOfTrendingBox] = React.useState(0);

    return (
        <Carousel className={"trendingBoxCarousel"} navButtonsAlwaysVisible={true} animation={"fade"} swipe={true} autoPlay={false}
                  next={() => {
                      setIndexOfTrendingBox(indexOfTrendingBox >= props.streamArray.length ? 0 : indexOfTrendingBox + 1);
                  }}
                  prev={() => {
                      setIndexOfTrendingBox(indexOfTrendingBox - 1 <= 0 ? props.streamArray.length - 1 : indexOfTrendingBox - 1);
                  }}>
            <ReactTwitchEmbedComponent userLogin={props.streamArray[indexOfTrendingBox].user_login}/>
        </Carousel>
    );
}