import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Grid from "@mui/material/Grid";

export default function ClipsPagination(props) {
    return (
        !props.loadingClips ?
            <Grid item key={'pagination'} xs={12}>
                <Stack spacing={2}>
                    <Pagination count={10} size="large" style={{margin: "auto"}}/>
                </Stack>
            </Grid>
            : null
    );
}