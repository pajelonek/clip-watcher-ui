import * as React from "react";
import FormControl from "@mui/material/FormControl";
import {Box, FormLabel, MenuItem, Select} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setPeriod, selectPeriod} from '../../../Services/Reducers/filterSlice';
import {clearCursorList} from "../../../Services/Reducers/cursorSlice";
import {clearPage} from "../../../Services/Reducers/pageSlice";

export default function PeriodRadioFilter(props) {
    const dispatch = useDispatch();
    const period = useSelector(selectPeriod);

    function handleOnChange(e) {
        dispatch(clearCursorList());
        dispatch(clearPage());
        dispatch(setPeriod(e.target.value));
    }

    const periodBoxStyles = {
        display: 'flex',
        flexWrap: 'wrap',
        p: 1,
        m: 1,
        borderRadius: 1
    };

    return (
        <Box xs={3} lg={12} sx={{...periodBoxStyles}} {...props}>
            <FormControl fullWidth>
                <FormLabel id="sidebar-period-label">Period</FormLabel>
                <Select
                    id="sidebar-period-select"
                    value={period}
                    label="Period"
                    onChange={handleOnChange}
                    sx={{marginTop: "2%"}}
                >
                    <MenuItem value="today">Today</MenuItem>
                    <MenuItem value="week">Week</MenuItem>
                    <MenuItem value="month">Month</MenuItem>
                    <MenuItem value="all_time">All time</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}