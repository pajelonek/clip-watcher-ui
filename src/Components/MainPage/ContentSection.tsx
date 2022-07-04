import * as React from "react";
import Grid from "@mui/material/Grid";
import ClipsContainer from "./ClipsSection/ClipsContainer";
import ClipsPagination from "./ClipsSection/ClipsPagination";
import SideBar from "./SideBar/SideBar";
import {useGetClipsQuery} from "../../Services/Redux/twitchApi";
import {useDispatch, useSelector} from "react-redux";
import {
    FilterState,
    selectCategory,
    selectChannelState,
    selectCursor,
    selectPeriod
} from "../../Services/Redux/filterSlice";
import Typography from "@mui/material/Typography";
import {addNewCursorToContext} from "../../Services/Redux/cursorSlice";
import {Box} from "@mui/material";

function replaceMaskUrlWithSize(urlWithMask: string, width: string, height: string) {
    return urlWithMask.replace('{width}', width).replace('{height}', height);
}

export default function ContentSection() {
    const dispatch = useDispatch();

    const filterState: FilterState = {
        period: useSelector(selectPeriod),
        category: useSelector(selectCategory),
        cursor: useSelector(selectCursor),
        channel: useSelector(selectChannelState)
    };

    const {data, error, isLoading, isUninitialized, isFetching, isSuccess} = useGetClipsQuery(filterState);

    if (data) {
        if (!isLoading && !isUninitialized && !isFetching && isSuccess) {
            dispatch(addNewCursorToContext(data.pagination.cursor));
        }
    }

    return (
        <Grid container>
            <Grid item xs={12}>
                <Grid container flexDirection={"row-reverse"}>
                    <Grid item key={'sideMenu'} xs={12} lg={3}>
                        <SideBar/>
                    </Grid>
                    <Grid item xs={12} lg={9}>
                        <Grid container marginLeft={'2%'} marginTop={'2%'}>
                            <Grid item xs={2}>
                                <Box
                                    component="img"
                                    sx={{
                                        height: 233,
                                        width: 150,
                                        maxHeight: {xs: 233, md: 167},
                                        maxWidth: {xs: 350, md: 250},
                                    }}
                                    alt="The house from the offer."
                                    src={replaceMaskUrlWithSize(filterState.category.box_art_url, "500", "500")}
                                />
                            </Grid>
                            <Grid item xs={10}>
                                <Typography variant="h4" component="h2" style={{'position': 'relative', 'top': '40%', 'left': '0'}}>Most popular {filterState.category.name} clips
                                    from {filterState.period}</Typography>
                            </Grid>
                            <Grid item key={'clipsContainer'} xs={12}>
                                <Grid container spacing={0}>
                                    <ClipsContainer clips={data?.data} loadingClips={isFetching} isLoading={isLoading}
                                                    isUninitialized={isUninitialized} hasError={error}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item key={'menu'} xs={12}>
                        <ClipsPagination loadingClips={isFetching}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}