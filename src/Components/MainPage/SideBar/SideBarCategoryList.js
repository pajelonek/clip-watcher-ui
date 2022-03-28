import Grid from "@mui/material/Grid";
import {Box, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import * as React from "react";
import Typography from "@mui/material/Typography";

export default function SideBarCategoryList() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <Box xs={3} lg={12} sx={{
            display: 'flex', flexWrap: 'wrap',
            p: 1, m: 1, bgcolor: 'background.paper',
            borderRadius: 1, maxWidth: '100%'
        }}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography>Category: </Typography>
                </Grid>
                <Grid item xs={12}>
                    <FormControl sx={{m: 1, minWidth: 120}}>
                        <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                        <Select labelId="demo-simple-select-helper-label" id="demo-simple-select-helper"
                                value={age} label="Age" onChange={handleChange}>
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Box>
    );
}