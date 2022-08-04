import * as React from "react";
import {Box, Typography} from "@mui/material";
import {selectCategory, selectChannelState, selectPeriod} from "../../Services/Reducers/filterSlice";
import {useSelector} from "react-redux";
import Grid from "@mui/material/Grid";

export default function SideBarFilterList() {

    const filterState = {
        period: useSelector(selectPeriod),
        category: useSelector(selectCategory),
        channel: useSelector(selectChannelState),
        cursor: {
            value: ''
        },
    };

    return (
        <Box sx={{
            paddingTop: '1',
            m: 1,
        }}>
            <Grid container
                  alignItems="center"
                  justifyContent="center">
                <Grid item xs={12} p={1}>
                    <Typography>Active filters: </Typography>
                </Grid>
                <Grid item xs={12} padding={"2px"}>
                    <Grid container spacing={1}>
                        <Grid item>
                            {filterState.period !== undefined ? <Box sx={{border: '1px solid grey', backgroundColor: "red", borderRadius: '16px'}}
                                                                     marginLeft={"2%"}
                                                                     marginRight={"2%"}
                                                                     textAlign={"center"}>
                                <Typography m={0.8} style={{display: 'inline-block'}} variant={"body1"}>{filterState.period}</Typography>
                            </Box> : null}
                        </Grid>
                        {filterState.category.name !== '' ? <Grid item>
                             <Box sx={{border: '1px solid grey', backgroundColor: "red", borderRadius: '16px'}}
                                                                       textAlign={"center"}>
                                <Typography m={0.8} style={{display: 'inline-block'}} variant={"body1"}>{filterState.category.name}</Typography>
                            </Box>
                        </Grid> : <div/>}
                        {filterState.channel.isSelected !== false ?<Grid item>
                             <Box sx={{border: '1px solid grey', backgroundColor: "red", borderRadius: '16px'}}
                                                                             textAlign={"center"}>
                                <Typography m={0.8} style={{display: 'inline-block'}} variant={"body1"}>{filterState.channel.selectedChannel.display_name}</Typography>
                            </Box>
                        </Grid>: <div/>}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}