import Grid from "@mui/material/Grid";
import {Box, Divider} from "@mui/material";
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
        <Box sx={{...commonStyles, borderRadius: '16px'}}>
            <Grid container xs={12}>
                <ul>
                    <Box sx={{
                        display: 'flex', flexWrap: 'wrap',
                        p: 1, m: 1, bgcolor: 'background.paper',
                        maxWidth: 300, borderRadius: 1
                    }}>
                        <SideBarFilterList/>
                    </Box>
                    <Divider component="ul"/>
                    <Box sx={{
                        display: 'inline-list-item', flexWrap: 'nowrap',
                        p: 1, m: 1, bgcolor: 'background.paper',
                        maxWidth: 300, borderRadius: 1
                    }}>
                        <PeriodRadioFilter/>
                    </Box>
                    <Divider component="ul"/>
                    <Box sx={{
                        display: 'flex', flexWrap: 'wrap',
                        p: 1, m: 1, bgcolor: 'background.paper',
                        maxWidth: 300, borderRadius: 1
                    }}>
                        <SideBarCategoryList/>
                    </Box>
                    <Divider component="ul"/>
                    <Box sx={{
                        display: 'flex', flexWrap: 'wrap',
                        p: 1, m: 1, bgcolor: 'background.paper',
                        maxWidth: 300, borderRadius: 1
                    }}>
                        <SideBarChannelList/>
                    </Box>
                </ul>
            </Grid>
        </Box>
    );
};