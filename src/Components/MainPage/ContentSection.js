import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import * as React from "react";
import ClipsContainer from "./ClipsSection/ClipsContainer";
import ClipsPagination from "./ClipsSection/ClipsPagination";
import SideBar from "./SideBar/SideBar";
import {useGetClipsQuery} from "../../Services/Redux/clipsApi";
import {useSelector} from "react-redux";
import {selectPeriod} from "../../Services/Redux/periodSlice";

export default function ContentSection() {
    const period = useSelector(selectPeriod);

    const { data, error, isLoading, isUninitialized, isFetching } = useGetClipsQuery(period, {
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