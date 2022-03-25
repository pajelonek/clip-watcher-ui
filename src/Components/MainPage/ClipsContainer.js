import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import * as React from "react";
import {CardActionArea, CardMedia, Modal} from "@mui/material";
import {useEffect, useState} from "react";

export default function ClipsContainer() {
    const [clips, setClips] = useState(null);
    const [clipsLoading, setClipsLoading] = useState(false);

    const fetchUsers = async () => {
        setClipsLoading(true);

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(process.env.REACT_APP_API_AUTH_USERNAME + ':' + process.env.REACT_APP_API_AUTH_PASSWORD),
            },
            body: JSON.stringify({
                "gameId": "509658",
                "first": "21"
            })
        };

        await fetch(process.env.REACT_APP_API_URL + '/clips', requestOptions)
            .then(r => r.json())
            .then(r => setClips(r.data))
            .catch(e => {
                console.log('error');
                console.log(e);
            }).finally(() => {
                    setClipsLoading(false);
                }
            );
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        height: '80%',
        maxHeight: 800,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Container maxWidth="md" component="main">
            <Button disabled={clipsLoading}>Test</Button>
            <Grid container spacing={5} alignItems="flex-end">
                {clips ? clips.map((clip) => (
                    <Grid item key={clip.id} xs={12} sm={6} md={4}>
                        <Card sx={{maxWidth: 345}}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={clip.thumbnail_url}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {clip.broadcaster_name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {clip.title}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                    </Grid>
                )) : null}
            </Grid>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal open={open} onClose={handleClose}
                   aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Card sx={style}>
                    {/*<CardActionArea>*/}
                    {/*    <CardMedia*/}
                    {/*        component="img"*/}
                    {/*        height="500px"*/}
                    {/*        image="https://clips-media-assets2.twitch.tv/AT-cm%7C962031684-preview-480x272.jpg"*/}
                    {/*        alt="Twitch Clip"*/}
                    {/*    />*/}
                    {/*    <CardContent>*/}
                    {/*        <Typography variant="h5" color="text.secondary">*/}
                    {/*            The awakening*/}
                    {/*        </Typography>*/}
                    {/*        <Typography gutterBottom variant="body2" component="div">*/}
                    {/*            SilvaNo4ka*/}
                    {/*        </Typography>*/}
                    {/*    </CardContent>*/}
                    {/*</CardActionArea>*/}
                    {/*<CardActions>*/}
                    {/*    <Button size="small" color="primary">*/}
                    {/*        Share*/}
                    {/*    </Button>*/}
                    {/*</CardActions>*/}
                    {/*<iframe*/}
                    {/*    title={"ok"}*/}
                    {/*    src="https://clips.twitch.tv/embed?clip=AverageSparklyTortoisePeoplesChamp&parent=streamernews.example.com"*/}
                    {/*    height="<height>"*/}
                    {/*    width="<width>"*/}
                    {/*    allowFullScreen>*/}
                    {/*</iframe>*/}
                </Card>
            </Modal>
        </Container>
    );
}