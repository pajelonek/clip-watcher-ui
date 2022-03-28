import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import * as React from "react";
import ClipsContainer from "./ClipsSection/ClipsContainer";
import ClipsPagination from "./ClipsSection/ClipsPagination";
import SideBar from "./SideBar/SideBar";
import useAPI from "../../Services/Api/useAPI";
import {clipsAPIOps} from "../../Services/Api/clipsAPIOps";

export default function ContentSection() {
    const [response, loading, hasError] = useAPI(process.env.REACT_APP_API_URL + '/clips', clipsAPIOps);

    return (
        <Container component="main" maxWidth={"xl"}>
            <Grid container spacing={5} flexDirection={"row-reverse"}>
                <Grid item key={'sideMenu'} xs={12} lg={2}>
                    <SideBar/>
                </Grid>
                <Grid item key={'clipsContainer'} xs={12} lg={10}>
                    <Grid container xs={12} spacing={5} alignItems="flex-end">
                        <ClipsContainer clips={response} loadingClips={loading} hasError={hasError}/>
                    </Grid>
                </Grid>
                <Grid item key={'menu'} xs={12}>
                    <ClipsPagination loadingClips={loading}/>
                </Grid>
            </Grid>
        </Container>
    );
}