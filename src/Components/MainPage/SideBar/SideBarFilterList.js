import * as React from "react";
import {Box} from "@mui/material";

export default function SideBarFilterList() {
    return (
        <Box sx={{
            display: 'block', flexWrap: 'nowrap',
            p: 1, m: 1, bgcolor: 'background.paper',
            maxWidth: 300, borderRadius: 1
        }}>
            Applied filters:
        </Box>
    );
}