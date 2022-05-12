import * as React from "react";
import Grid from "@mui/material/Grid";
import ClipsContainer from "./ClipsSection/ClipsContainer";
import ClipsPagination from "./ClipsSection/ClipsPagination";
import SideBar from "./SideBar/SideBar";
import {useGetClipsQuery} from "../../Services/Redux/twitchApi";
import {useDispatch, useSelector} from "react-redux";
import {FilterState, selectCategory, selectCursor, selectPeriod} from "../../Services/Redux/filterSlice";
import Typography from "@mui/material/Typography";
import {setCursor} from "../../Services/Redux/cursorSlice";

export default function ContentSection() {
    const dispatch = useDispatch();

    const filterState: FilterState = {
        period: useSelector(selectPeriod),
        category: useSelector(selectCategory),
        cursor: useSelector(selectCursor)
    };

    const {data, error, isLoading, isUninitialized, isFetching} = useGetClipsQuery(filterState);

    if (data && data.pagination.cursor && filterState.cursor !== data.pagination.cursor) {
        dispatch(setCursor(data.pagination.cursor));
    }

    return (
        <Grid container>
            <Grid item xs={12}>
                <Grid container flexDirection={"row-reverse"}>
                    <Grid item xs={12} marginLeft={'2%'} marginTop={'1%'}>
                        <Typography variant="h4" component="h2">Most popular {filterState.category.name} clips
                            from {filterState.period}</Typography>
                    </Grid>
                    <Grid item key={'sideMenu'} xs={12} lg={3}>
                        <SideBar/>
                    </Grid>
                    <Grid item key={'clipsContainer'} xs={12} lg={9}>
                        <Grid container spacing={0}>
                            <ClipsContainer clips={data?.data} loadingClips={isFetching} isLoading={isLoading}
                                            isUninitialized={isUninitialized} hasError={error}/>
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