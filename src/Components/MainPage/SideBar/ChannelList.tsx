import Grid from "@mui/material/Grid";
import * as React from "react";

export default function FiltersList(props: any) {
    return (
        <Grid id={"sidebar-FiltersList-Label"} item xs={12} {...props}>
            Filters:
        </Grid>
    );
}