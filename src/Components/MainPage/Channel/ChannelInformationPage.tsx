import * as React from "react";
import {Channel, selectChannel} from "../../../Services/Redux/filterSlice";
import {useSelector} from "react-redux";
import Grid from "@mui/material/Grid";
import {Avatar, Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import Logo from "./twitch.png";

export default function ChannelInformationPage() {
    const channel: Channel = useSelector(selectChannel);

    const typographyLabelStyles = {}

    return (
        <Grid container marginTop={'2%'}>
            <Grid item xs={12} marginLeft={'2%'} marginRight={'2%'}>
                <Grid container spacing={3} height={'100%'}>
                    <Grid item xs={3}>
                        <Paper sx={{height: '100%'}}>
                            <Grid container direction="column" alignItems="center" justifyContent="center"
                                  style={{minHeight: '100%'}}>
                                <Grid item xs={12} style={{
                                    justifyContent: "center",
                                    display: "flex"
                                }}>
                                    <Avatar alt="broadcasterAvatar" src={channel.thumbnail_url}
                                            sx={{width: '50%', height: '50%'}}/>
                                </Grid>
                                <Grid item xs={12} style={{
                                    justifyContent: "center",
                                    minHeight: '30%',
                                    maxHeight: '30%'
                                }}>
                                    <Typography variant="h3" component="h2">
                                        {channel.display_name}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper sx={{height: '100%'}}>
                            <Grid container direction="column">
                                <Grid item xs={12} marginTop={'1%'} marginLeft={'2%'} justifyContent={"left"} textAlign={"left"}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12}>
                                            <Typography noWrap style={{...typographyLabelStyles, maxWidth: '100%'}}
                                                        variant="h4" component="h2">
                                                Last title: {channel.title}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography style={{...typographyLabelStyles}} variant="h4" component="h2">
                                                Language: <img alt={"countryFlag"} width={'50px'} height={'30px'}
                                                               src={`https://flagcdn.com/w20/` + channel.broadcaster_language + `.png`}/>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography style={{...typographyLabelStyles}} variant="h4" component="h2">
                                                Last played: {channel.game_name}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography style={{...typographyLabelStyles}} variant="h4" component="h2">
                                                Currently: {channel.is_live ? "LIVE" : "OFFLINE"}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Grid container height={'100%'}>
                            <Grid item xs={12} justifyContent={"center"} textAlign={"center"}>
                                <Paper sx={{height: '100%'}}>
                                    <Grid container>
                                        <Grid item xs={12} marginTop={'2%'} alignItems={"center"} justifyContent={"center"}>
                                            <Typography style={{...typographyLabelStyles}} variant="h4" component="h2">
                                                Visit channel:
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} marginTop={'5%'}>
                                            <a target="_blank" rel="noopener noreferrer"
                                               href={"https://www.twitch.tv/" + channel.broadcaster_login}>
                                                <img alt={"twitch icon"} src={Logo}
                                                     style={{maxWidth: '75%', maxHeight: '75%'}}/>
                                            </a>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}