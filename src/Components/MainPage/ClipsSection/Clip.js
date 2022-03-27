import * as React from "react";
import {CardActionArea, CardMedia, Modal} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

export default function Clip(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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

    console.log('clip');
    console.log(props.clip);
    return (
        <div>
            <Card sx={{maxWidth: 345}}>
                <CardActionArea onClick={handleOpen}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={props.clip.thumbnail_url}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.clip.broadcaster_name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
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
                    <CardActionArea>
                        <CardContent>
                            <iframe
                                title={props.clip.title}
                                src={props.clip.embed_url + "&parent=" + window.location.hostname}
                                height="480"
                                width="640"
                                allowFullScreen>
                            </iframe>
                            <Typography variant="h5" color="text.secondary">
                                {props.clip.title}
                            </Typography>
                            <Typography gutterBottom variant="body2" component="div">
                                {props.clip.broadcaster_name}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                    </CardActions>
                </Card>
            </Modal>
        </div>
    );
}
