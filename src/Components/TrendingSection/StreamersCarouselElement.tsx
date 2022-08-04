import Grid from "@mui/material/Grid";
import {Box, Typography} from "@mui/material";

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
        <Grid container marginLeft={"1%"} marginRight={"1%"}>
            <Box alignItems={"center"} width={"100%"}
                 sx={{
                     boxShadow: 3,
                     borderRadius: 1,
                     bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#18181f' : '#ffffff'),
                     color: (theme) =>
                         theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                 }}>
                <Grid item xs={12} marginTop={"1%"} marginBottom={"1%"}>
                    <Typography variant={"h5"}
                                textAlign={"center"}>{props.index + 1}.{props.streamer.user_name}</Typography>
                </Grid>
                <Grid item xs={12} marginBottom={"1%"}>
                    <Typography textAlign={"center"}>Playing: {props.streamer.game_name}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <img
                        loading="lazy"
                        draggable={false}
                        alt={"streamer thumbnail"}
                        src={replaceMaskUrlWithSize(props.streamer.thumbnail_url, '300', '160')}
                    />
                </Grid>
            </Box>
        </Grid>
    );
}