import * as React from "react";
import Grid from "@mui/material/Grid";
import PeriodRadioFilter from "./Period/PeriodRadioFilter";
import SideBarChannelList from "./Channel/SideBarChannelList";
import SideBarFilterList from "./FilterList/SideBarFilterList";

export default function SideBar(props) {

    const commonStyles = {
        bgcolor: (theme) => theme.palette.mode === 'dark' ? "#161617" : "#ffffff",
        borderColor: 'text.primary',
        margin: 'auto',
        borderRadius: '20px',
        marginTop: '3%'
    };

    return (
        <Grid container {...props} className={"sideBarContainer"} sx={{margin:"auto"}}>
            <Grid item xs={11} lg={10} sx={{margin: 'auto'}} >
                <Grid container sx={{...commonStyles}}>
                    <Grid item key={'SideBarFilterList'} sx={{
                        '@media (max-width: 1200px)' : {
                            borderRight: (theme) => `4px solid ${theme.palette.trendingBoxColor.main}`
                        },
                        '@media (min-width: 1200px)' : {
                            borderBottom: (theme) => `4px solid ${theme.palette.trendingBoxColor.main}`
                        }
                    }} xs={12} sm={4} md={4} lg={12}>
                        <SideBarFilterList/>
                    </Grid>
                    <Grid item key={'SideBarRadioList'} sx={{
                        '@media (max-width: 1200px)' : {
                            borderRight: (theme) => `4px solid ${theme.palette.trendingBoxColor.main}`
                        },
                        '@media (min-width: 1200px)' : {
                            borderBottom: (theme) => `4px solid ${theme.palette.trendingBoxColor.main}`
                        }
                    }} xs={12} sm={4} md={4} lg={12}>
                        <PeriodRadioFilter/>
                    </Grid>
                    <Grid item key={'ChannelList'} sx={{
                        '@media (max-width: 1200px)' : {
                            borderRight: (theme) => `4px solid ${theme.palette.trendingBoxColor.main}`
                        },
                        '@media (min-width: 1200px)' : {
                            borderBottom: (theme) => `4px solid ${theme.palette.trendingBoxColor.main}`
                        }
                    }} xs={12} sm={4} md={4} lg={12}>
                        <SideBarChannelList/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}