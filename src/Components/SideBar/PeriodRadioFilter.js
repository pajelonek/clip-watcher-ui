import FormControl from "@mui/material/FormControl";
import {Box, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import Grid from "@mui/material/Grid";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setPeriod, selectPeriod} from '../../Services/Reducers/filterSlice';
import {clearCursorList} from "../../Services/Reducers/cursorSlice";
import {clearPage} from "../../Services/Reducers/pageSlice";
export default function PeriodRadioFilter(props) {
    const dispatch = useDispatch();
    const period = useSelector(selectPeriod);

    function handleOnChange(e) {
        dispatch(clearCursorList());
        dispatch(clearPage());
        dispatch(setPeriod(e.currentTarget.value));
    }

    return (
        <Box xs={3} lg={12} sx={{
            display: 'flex', flexWrap: 'wrap',
            p: 1, m: 1,
            borderRadius: 1
        }} {...props}>
            <FormControl>
                <FormLabel id="sidebar-radio-label">Period</FormLabel>
                <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group" value={period ? period : 'today' } onChange={handleOnChange}>
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