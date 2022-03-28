import Grid from "@mui/material/Grid";
import {Box} from "@mui/material";
import SideBarFilterList from "./SideBarFilterList";
import PeriodRadioFilter from "./PeriodRadioFilter";
import SideBarCategoryList from "./SideBarCategoryList";
import SideBarChannelList from "./SideBarChannelList";
import * as React from "react";

export default function SideBar() {
    const commonStyles = {
        bgcolor: 'background.paper',
        borderColor: 'text.primary',
        border: 1
    };

    return (
        <Box sx={{...commonStyles, borderRadius: '3px'}}>
            <Grid container xs={12}>
                <Grid item key={'SideBarFilterList'} xs={12} sm={6} md={3} lg={12}>
                    <SideBarFilterList/>
                </Grid>
                <Grid item key={'SideBarRadioList'} xs={12} sm={6} md={3} lg={12}>
                    <PeriodRadioFilter/>
                </Grid>
                <Grid item key={'CategoriesList'} xs={12} sm={6} md={3} lg={12}>
                    <SideBarCategoryList/>
                </Grid>
                <Grid item key={'ChannelList'} xs={12} sm={6} md={3} lg={12}>
                    <SideBarChannelList/>
                </Grid>
            </Grid>
        </Box>
    );
};