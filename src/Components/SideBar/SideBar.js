import * as React from "react";
import Grid from "@mui/material/Grid";
import PeriodRadioFilter from "./PeriodRadioFilter";
import SideBarChannelList from "./SideBarChannelList";
import SideBarFilterList from "./SideBarFilterList";

export default function SideBar(props) {

    const commonStyles = {
        bgcolor: "#161617",
        borderColor: 'text.primary',
        margin: 'auto',
        borderRadius: '20px',
        marginTop: '3%'
    };

    return (
        <Grid container {...props} marginTop={"6%"}>
            <Grid item xs={11} lg={10} sx={{margin: 'auto'}} >
                <Grid container sx={{...commonStyles}}>
                    <Grid item key={'SideBarFilterList'} sx={{
                        '@media (max-width: 1200px)' : {
                            borderRight: (theme) => `4px solid ${theme.palette.trendingBoxColor.main}`
                        },
                        '@media (min-width: 1200px)' : {
                            borderBottom: (theme) => `4px solid ${theme.palette.trendingBoxColor.main}`
                        }
                    }} xs={12} sm={6} md={3} lg={12}>
                        <SideBarFilterList/>
                    </Grid>
                    <Grid item key={'SideBarRadioList'} sx={{
                        '@media (max-width: 1200px)' : {
                            borderRight: (theme) => `4px solid ${theme.palette.trendingBoxColor.main}`
                        },
                        '@media (min-width: 1200px)' : {
                            borderBottom: (theme) => `4px solid ${theme.palette.trendingBoxColor.main}`
                        }
                    }} xs={12} sm={6} md={3} lg={12}>
                        <PeriodRadioFilter/>
                    </Grid>
                    <Grid item key={'ChannelList'} sx={{
                        '@media (max-width: 1200px)' : {
                            borderRight: (theme) => `4px solid ${theme.palette.trendingBoxColor.main}`
                        },
                        '@media (min-width: 1200px)' : {
                            borderBottom: (theme) => `4px solid ${theme.palette.trendingBoxColor.main}`
                        }
                    }} xs={12} sm={6} md={3} lg={12}>
                        <SideBarChannelList/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}