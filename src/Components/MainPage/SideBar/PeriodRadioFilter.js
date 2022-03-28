import FormControl from "@mui/material/FormControl";
import {Box, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import Grid from "@mui/material/Grid";
import * as React from "react";

export default function PeriodRadioFilter() {

    function handleOnChange(e) {
        localStorage.setItem('period', e.currentTarget.value);
    }

    return (
        <Box xs={3} lg={12} sx={{
            display: 'flex', flexWrap: 'wrap',
            p: 1, m: 1, bgcolor: 'background.paper',
            borderRadius: 1
        }}>
            <FormControl>
                <FormLabel id="sidebar-radio-label">Period</FormLabel>
                <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group" /*value={}*/ onChange={handleOnChange}>
                    <Grid container>
                        <Grid item xs={12}>
                            <FormControlLabel value="today" control={<Radio size="small"/>} label="Today"/>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel value="week" control={<Radio size="small"/>} label="Week"/>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel value="month" control={<Radio size="small"/>} label="Month"/>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel value="all_time" control={<Radio size="small"/>} label="All time"/>
                        </Grid>
                    </Grid>
                </RadioGroup>
            </FormControl>
        </Box>
    );
}