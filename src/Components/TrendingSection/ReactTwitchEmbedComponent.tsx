import * as React from 'react';
import ReactTwitchEmbedVideo from "react-twitch-embed-video";
import {useTheme} from "@mui/material/styles";

interface ReactTwitchEmbedComponentProps {
    userLogin: any
}

export default function ReactTwitchEmbedComponent(props: ReactTwitchEmbedComponentProps) {
    const theme = useTheme();

    return (
        <ReactTwitchEmbedVideo width={'95%'}
                               height={'100%'}
                               key={0}
                               theme={theme.palette.mode}
                               channel={props.userLogin}
                               targetClass={"testCLass"}
                               autoplay={false}
                               muted={true}
                               targetId={"reactVideo"}/>
    );
}