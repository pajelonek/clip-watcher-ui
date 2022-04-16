import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ClipsContainer from "./ClipsSection/ClipsContainer";
import ClipsPagination from "./ClipsSection/ClipsPagination";
import SideBar from "./SideBar/SideBar";
import {useGetClipsQuery} from "../../Services/Redux/twitchApi";
import {useSelector} from "react-redux";
import {FilterState, selectCategory, selectPeriod} from "../../Services/Redux/filterSlice";

export default function ContentSection() {

    const filterState: FilterState = {
        period: useSelector(selectPeriod),
        category: useSelector(selectCategory)
    };

    const { data, error, isLoading, isUninitialized, isFetching } = useGetClipsQuery(filterState, {
        refetchOnMountOrArgChange: true
    });

    return (
        <Container component="main" maxWidth={"xl"}>
            <Grid container flexDirection={"row-reverse"}>
                <Grid item key={'sideMenu'} xs={12} lg={2}>
                    <SideBar/>
                </Grid>
                <Grid item key={'clipsContainer'} xs={12} lg={10}>
                    <Grid container xs={12} alignItems="flex-end">
                        <ClipsContainer clips={data?.data} loadingClips={isFetching} isLoading={isLoading} isUninitialized={isUninitialized} hasError={error}/>
                    </Grid>
                </Grid>
                <Grid item key={'menu'} xs={12}>
                    <ClipsPagination loadingClips={isFetching}/>
                </Grid>
            </Grid>
        </Container>
    );
}