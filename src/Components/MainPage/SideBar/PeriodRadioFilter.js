import FormControl from "@mui/material/FormControl";
import {FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import Grid from "@mui/material/Grid";
import * as React from "react";

export default function PeriodRadioFilter() {
    
    function handleOnChange(e) {
        localStorage.setItem('period', e.currentTarget.value);
    }

    return (
        <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Period</FormLabel>
            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group"
            onChange={handleOnChange}>
                <Grid container>
                    <Grid item xs={12}>
                        <FormControlLabel value="today" control={<Radio />} label="Today"/>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel value="week" control={<Radio/>} label="Week"/>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel  value="month" control={<Radio />} label="Month"/>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel value="all_time" control={<Radio/>} label="All time"/>
                    </Grid>
                </Grid>
            </RadioGroup>
        </FormControl>
    );
}