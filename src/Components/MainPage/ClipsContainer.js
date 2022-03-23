import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import StarIcon from "@mui/icons-material/StarBorder";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import * as React from "react";
import {CardActionArea, CardMedia, Modal} from "@mui/material";

export default function ClipsContainer() {
    const tiers = [
        {
            title: 'Free',
            price: '0',
            description: [
                '10 users included',
                '2 GB of storage',
                'Help center access',
                'Email support',
            ],
            buttonText: 'Sign up for free',
            buttonVariant: 'outlined',
        },
        {
            title: 'Pro',
            subheader: 'Most popular',
            price: '15',
            description: [
                '20 users included',
                '10 GB of storage',
                'Help center access',
                'Priority email support',
            ],
            buttonText: 'Get started',
            buttonVariant: 'contained',
        },
        {
            title: 'Enterprise',
            price: '30',
            description: [
                '50 users included',
                '30 GB of storage',
                'Help center access',
                'Phone & email support',
            ],
            buttonText: 'Contact us',
            buttonVariant: 'outlined',
        },
    ];

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        maxWidth: 345
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Container maxWidth="md" component="main">
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal open={open} onClose={handleClose}
                aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Card sx={style}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://clips-media-assets2.twitch.tv/AT-cm%7C962031684-preview-480x272.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
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
            <Grid container spacing={5} alignItems="flex-end">
                {tiers.map((tier) => (
                    // Enterprise card is full width at sm breakpoint
                    <Grid
                        item
                        key={tier.title}
                        xs={12}
                        sm={tier.title === 'Enterprise' ? 12 : 6}
                        md={4}
                    >
                        <Card>
                            <CardHeader
                                title={tier.title}
                                subheader={tier.subheader}
                                titleTypographyProps={{align: 'center'}}
                                action={tier.title === 'Pro' ? <StarIcon/> : null}
                                subheaderTypographyProps={{
                                    align: 'center',
                                }}
                                sx={{
                                    backgroundColor: (theme) =>
                                        theme.palette.mode === 'light'
                                            ? theme.palette.grey[200]
                                            : theme.palette.grey[700],
                                }}
                            />
                            <CardContent>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'baseline',
                                        mb: 2,
                                    }}
                                >
                                    <Typography component="h2" variant="h3" color="text.primary">
                                        ${tier.price}
                                    </Typography>
                                    <Typography variant="h6" color="text.secondary">
                                        /mo
                                    </Typography>
                                </Box>
                                <ul>
                                    {tier.description.map((line) => (
                                        <Typography
                                            component="li"
                                            variant="subtitle1"
                                            align="center"
                                            key={line}
                                        >
                                            {line}
                                        </Typography>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardActions>
                                <Button fullWidth variant={tier.buttonVariant}>
                                    {tier.buttonText}
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}