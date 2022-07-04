import * as React from "react";
import {Channel, selectChannel} from "../../../Services/Redux/filterSlice";
import {useSelector} from "react-redux";
import Grid from "@mui/material/Grid";
import {Avatar, Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import Logo from "./twitch_icon.jpg";

export default function ChannelInformationPage() {
    const channel: Channel = useSelector(selectChannel);
    const commonStyles = {
        bgcolor: 'background.paper',
        margin: 'auto',
        marginTop: '2%',
        height: '35vh',
        width: 'auto'
    };

    const containerStyles = {
        width: 'auto',
        maxHeight: '45vh',
        textAlign: 'center',
        marginTop: '0'
    };

    const typographyLabelStyles = {
        marginLeft: '2%'
    }

    return (
        <Grid container sx={{...containerStyles}} height={'45vh'} width={'100%'}>
            <Grid item xs={12}>
                <Grid container sx={{...commonStyles}} width={'100%'} spacing={4}>
                    <Grid item xs={3}>
                        <Paper sx={{width: '100%', height: '100%'}}>
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
                                <Grid item xs={12} justifyContent={"left"} textAlign={"left"}>
                                    <Grid container spacing={3} marginTop={'2%'}>
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
                        <Paper sx={{height: '100%'}}>
                            <Grid container direction="column">
                                <Grid item xs={12} justifyContent={"center"} textAlign={"center"}>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Typography style={{...typographyLabelStyles}} variant="h4" component="h2">
                                                Visit channel on Twitch:
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <a target="_blank" rel="noopener noreferrer"
                                               href={"https://www.twitch.tv/" + channel.broadcaster_login}>
                                                <img alt={"twitch icon"} src={Logo}
                                                     style={{maxWidth: '70%', maxHeight: '70%'}}/>
                                            </a>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item xs={3}>
                        <Paper></Paper>
                    </Grid>
                    <Grid item xs={6}> <Paper></Paper>
                    </Grid>
                    <Grid item xs={3}> <Paper></Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}