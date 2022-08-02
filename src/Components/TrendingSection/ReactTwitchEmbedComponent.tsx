import * as React from 'react';
import ReactTwitchEmbedVideo from "react-twitch-embed-video";

interface ReactTwitchEmbedComponentProps {
    userLogin: any
}

export default function ReactTwitchEmbedComponent(props: ReactTwitchEmbedComponentProps) {
    return (
        <ReactTwitchEmbedVideo width={'95%'} height={'100%'} key={0}
                               channel={props.userLogin} autoplay={false}
                               muted={true} targetId={"reactVideo"}/>
    );
}