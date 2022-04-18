import * as React from "react";
import Grid from "@mui/material/Grid";
import SideBarFilterList from "./SideBarFilterList";
import PeriodRadioFilter from "./PeriodRadioFilter";
import SideBarCategoryList from "./SideBarCategoryList";
import SideBarChannelList from "./SideBarChannelList";

export default function SideBar() {
    const commonStyles = {
        bgcolor: "#161617",
        borderColor: 'text.primary',
        margin: 'auto',
        borderRadius: '5px',
        marginTop: '5%'
    };

    return (
        <Grid id={'test'} container>
            <Grid item xs={11} lg={10} sx={{margin: 'auto'}}>
                <Grid container sx={{...commonStyles}}>
                    <Grid item key={'SideBarFilterList'} xs={12} sm={6} md={3} lg={12}>
                        <SideBarFilterList/>
                    </Grid>
                    <Grid item key={'SideBarRadioList'} xs={12} sm={6} md={3} lg={12}>
                        <PeriodRadioFilter/>
                    </Grid>
                    <Grid item key={'CategoriesList'} xs={12} sm={6} md={3} lg={12}>
                        <SideBarCategoryList/>
                    </Grid>
                    <Grid item key={'ChannelList'} xs={12} sm={6} md={3} lg={12} >
                        <SideBarChannelList/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};