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
import ClipsChannelLabel from "./ClipsLabel/ClipsChannelLabel";
import ClipsCategoryLabel from "./ClipsLabel/ClipsCategoryLabel";


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
                            {!filterState.channel.isSelected ?
                                <ClipsCategoryLabel boxImg={filterState.category.box_art_url}
                                                    categoryName={filterState.category.name}
                                                    period={filterState.period}/> :
                                <ClipsChannelLabel/>}
                            <Grid item key={'clipsContainer'} xs={12}>
                                <ClipsContainer clips={data?.data}
                                                cursor={data?.pagination?.cursor}
                                                loadingClips={isFetching}
                                                isLoading={isLoading}
                                                isSuccess={isSuccess}
                                                isUninitialized={isUninitialized}
                                                hasError={error}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item key={'menu'} xs={12}>
                        <ClipsPagination cursor={data?.pagination?.cursor}
                                         isLoading={isLoading}
                                         isSuccess={isSuccess}
                                         isUninitialized={isUninitialized}
                                         hasError={error}
                                         loadingClips={isFetching}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}