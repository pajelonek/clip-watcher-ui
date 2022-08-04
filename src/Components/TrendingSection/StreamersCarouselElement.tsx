import Grid from "@mui/material/Grid";
import {Typography} from "@mui/material";

interface StreamersCarouselElementProps {
    key: never,
    index: number,
    height?: number,
    text: string,
    streamer: {
        id: string,
        user_id: string,
        user_login: string,
        user_name: string,
        type: string,
        thumbnail_url: string,
        title: string,
        language: string,
        game_name: string,
        game_id: string
    }
}

function replaceMaskUrlWithSize(urlWithMask: string, width: string, height: string) {
    return urlWithMask.replace('{width}', width).replace('{height}', height);
}

export default function StreamersCarouselElement(props: StreamersCarouselElementProps) {

    return (
        <Grid container border={"solid 1px"}>
            <Grid item xs={12} marginTop={"1%"} marginBottom={"1%"}>
                <Typography variant={"h5"} textAlign={"center"}>{props.index + 1}.{props.streamer.user_name}</Typography>
            </Grid>
            <Grid item xs={12}  marginBottom={"1%"}>
                <Typography textAlign={"center"}>Playing: {props.streamer.game_name}</Typography>
            </Grid>
            <Grid item xs={12}>
                <img
                    loading="lazy"
                    draggable={false}
                    alt={"streamer thumbnail"}
                    src={replaceMaskUrlWithSize(props.streamer.thumbnail_url, '220', '100')}
                />
            </Grid>
        </Grid>
    );
}