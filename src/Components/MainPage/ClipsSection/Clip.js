import * as React from "react";
import {CardActionArea, CardMedia, Modal} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

export default function Clip(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        height: '90%',
        maxHeight: 800,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4
    };

    return (
        <Grid container marginTop={'3%'} spacing={2} direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={10}>
                <Card sx={{width: '100%', height: '80%'}}>
                    <CardActionArea onClick={handleOpen}>
                        <CardMedia
                            component="img"
                            image={props.clip.thumbnail_url}
                            alt="clip image"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {props.clip.broadcaster_name}
                            </Typography>
                            <Typography maxHeight={'15px'} variant="body2" color="text.secondary">
                                {props.clip.title}
                            </Typography>
                        </CardContent>
                        <CardActions>
                        </CardActions>
                    </CardActionArea>
                </Card>
                <Modal open={open} onClose={handleClose}
                       aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                    <Card sx={style}>
                        <iframe
                            title={props.clip.title}
                            src={props.clip.embed_url + "&parent=" + window.location.hostname}
                            width="50%"
                            style={style}
                            allowFullScreen>
                        </iframe>
                    </Card>
                </Modal>
            </Grid>
        </Grid>
    );
}
