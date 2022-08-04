import Grid from "@mui/material/Grid";
import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";

function replaceMaskUrlWithSize(urlWithMask: string, width: string, height: string) {
    return urlWithMask.replace('{width}', width).replace('{height}', height);
}

interface ClipsCategoryLabelProps {
    boxImg: string,
    categoryName: string,
    period: string
}
function getPeriodMappingForUser (period: string) {
    switch (period) {
        case 'today' :
            return 'the last 24 hours';
        case 'week' :
            return 'the last week';
        case 'month' :
            return 'the last month';
        case 'all_time':
            return 'all time';
        default:
            return period;
    }
}

export default function ClipsCategoryLabel(props: ClipsCategoryLabelProps) {

    const contentSectionImageStyles = {
        height: 233,
        width: 150,
        maxHeight: {xs: 233, md: 167},
        maxWidth: {xs: 350, md: 250},
    };

    return (
        <Grid item xs={12}>
            <Grid container marginLeft={'1%'}>
                <Grid item xs={2}>
                    <Box
                        component="img"
                        sx={{...contentSectionImageStyles}}
                        src={replaceMaskUrlWithSize(props.boxImg, "500", "500")}
                    />
                </Grid>
                <Grid item xs={10}>
                    <Typography variant="h4" component="h2"
                                style={{'position': 'relative', 'top': '40%', 'left': '0'}}>
                        Most popular {props.categoryName} clips from {getPeriodMappingForUser(props.period)}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}