import * as React from "react";
import Grid from "@mui/material/Grid";
import ClipsContainer from "../ClipsSection/ClipsContainer";
import ClipsPagination from "../ClipsSection/ClipsPagination";
import SideBar from "../SideBar/SideBar";
import {useGetClipsQuery} from "../../Middleware/twitchApi";
import {useSelector} from "react-redux";
import {
    FilterState,
    selectCategory,
    selectChannelState,
    selectCursor,
    selectPeriod
} from "../../Services/Reducers/filterSlice";
import Typography from "@mui/material/Typography";
import {Box} from "@mui/material";

function replaceMaskUrlWithSize(urlWithMask: string, width: string, height: string) {
    return urlWithMask.replace('{width}', width).replace('{height}', height);
}

export default function ContentSection(props: any) {

    const filterState: FilterState = {
        period: useSelector(selectPeriod),
        category: useSelector(selectCategory),
        cursor: useSelector(selectCursor),
        channel: useSelector(selectChannelState)
    };

    const {data, error, isLoading, isUninitialized, isFetching, isSuccess} = useGetClipsQuery(filterState);

    return (
        <Grid container data-testid={props.dataTestId}>
            <Grid item xs={12}>
                <Grid container flexDirection={"row-reverse"}>
                    <Grid item key={'sideMenu'} xs={12} lg={3}>
                        <SideBar/>
                    </Grid>
                    <Grid item xs={12} lg={9}>
                        <Grid container marginLeft={'2%'} marginTop={'2%'} width={'100%'}>
                            <Grid item xs={12}>
                                <Grid container marginLeft={'1%'}>
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
                                    {/* todo zrob cos z tym jak channel wybieramy :/ niepotrzebne w paru przypadkach*/}
                                    <Grid item xs={10}>
                                        <Typography variant="h4" component="h2"
                                                    style={{'position': 'relative', 'top': '40%', 'left': '0'}}>Most
                                            popular {filterState.category.name} clips
                                            from {filterState.period}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item key={'clipsContainer'} xs={12}>
                                <ClipsContainer clips={data?.data} cursor={data?.pagination?.cursor} loadingClips={isFetching} isLoading={isLoading} isSuccess={isSuccess}
                                                    isUninitialized={isUninitialized} hasError={error}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item key={'menu'} xs={12}>
                        <ClipsPagination cursor={data?.pagination?.cursor} isLoading={isLoading} isSuccess={isSuccess}
                                         isUninitialized={isUninitialized} hasError={error} loadingClips={isFetching}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}