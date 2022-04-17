import * as React from "react";
import Grid from "@mui/material/Grid";
import ClipsContainer from "./ClipsSection/ClipsContainer";
import ClipsPagination from "./ClipsSection/ClipsPagination";
import SideBar from "./SideBar/SideBar";
import {useGetClipsQuery} from "../../Services/Redux/twitchApi";
import {useSelector} from "react-redux";
import {FilterState, selectCategory, selectPeriod} from "../../Services/Redux/filterSlice";
import Typography from "@mui/material/Typography";

export default function ContentSection() {

    const filterState: FilterState = {
        period: useSelector(selectPeriod),
        category: useSelector(selectCategory)
    };

    const {data, error, isLoading, isUninitialized, isFetching} = useGetClipsQuery(filterState, {
        refetchOnMountOrArgChange: true
    });

    return (
        <Grid container>
            <Grid item xs={12}>
                <Grid container flexDirection={"row-reverse"}>
                    <Grid item key={'sideMenu'} xs={12} lg={3}>
                        <SideBar/>
                    </Grid>
                    <Grid item key={'clipsContainer'} xs={12} lg={9}>
                        <Grid item xs={12} marginLeft={'2%'} marginTop={'1%'}>
                            <Typography variant="h4" component="h2">Most popular {filterState.category.name} clips from {filterState.period}</Typography>
                        </Grid>
                        <Grid container alignItems="flex-end">
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