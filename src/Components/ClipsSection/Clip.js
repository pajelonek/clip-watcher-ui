import * as React from "react";
import {CardActionArea, CardMedia, Modal} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// todo fix ts-ignore, check those styles
// todo przyda sie jakis zamiennik jak nie dziala thumbnail + walidacja if exists

export default function Clip(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        height: '90%',
        bgcolor: 'background.paper',
        border: '3px solid #000',
        boxShadow: 24,
        p: 4
    };

    return (
        <Grid id={"clipsContainer-clipComponent"} container marginTop={'3%'} spacing={1} direction="row" justifyContent="center" alignItems="center" {...props}>
            <Grid item xs={11.5}>
                <Card sx={{width: '100%', height: '80%'}}>
                    <CardActionArea
                        onClick={handleOpen}>
                        <CardMedia
                            component="img"
                            image={props.clip.thumbnail_url}
                            alt="clip image"
                        />
                        <CardContent>
                            <Grid container height={'7vh'} justifyContent="center">
                                <Grid item xs={12} width={'100%'} height={'70%'}>
                                    <Typography noWrap={true}>
                                        {props.clip.title}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} height={'30%'}>
                                    <Typography variant="body2" color="text.secondary" textAlign={"left"}>
                                        {props.clip.broadcaster_name}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} height={'30%'}>
                                    <Typography variant="body2" color="text.secondary" textAlign={"right"}>
                                        views: {props.clip.view_count}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Modal open={open} onClose={handleClose}
                       aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                    <Grid container>
                        <Grid item xs={12}>
                            <Card>
                                <iframe
                                    title={props.clip.title}
                                    src={props.clip.embed_url + "&parent=" + window.location.hostname}
                                    style={modalStyle}
                                    allow={'fullscreen'}
                                    >
                                </iframe>
                            </Card>
                        </Grid>
                    </Grid>
                </Modal>
            </Grid>
        </Grid>
    );
}
