import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import * as React from "react";
import {Box} from "@mui/material";
import SideBarFilterList from "./SideBar/SideBarFilterList";
import SideBarCategoryList from "./SideBar/SideBarCategoryList";
import SideBarChannelList from "./SideBar/SideBarChannelList";
import ClipsContainer from "./ClipsSection/ClipsContainer";
import {useEffect, useState} from "react";
import ClipsPagination from "./ClipsSection/ClipsPagination";

export default function ContentSection() {
    const [clips, setClips] = useState(null);
    const [loadingClips, setLoadingClips] = useState(false);

    const commonStyles = {
        bgcolor: 'background.paper',
        borderColor: 'text.primary',
        m: 1,
        border: 1
    };

    useEffect(() => {
        fetchClips();
    }, []);

    const fetchClips = async () => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(process.env.REACT_APP_API_AUTH_USERNAME + ':' + process.env.REACT_APP_API_AUTH_PASSWORD),
            },
            body: JSON.stringify({
                "gameId": "509658",
                "first": "24"
            })
        };

        setLoadingClips(true);

        await fetch(process.env.REACT_APP_API_URL + '/clips', requestOptions)
            .then(r => r.json())
            .then(r => setClips(r.data))
            .catch(e => {
                console.log('error');
                console.log(e);
            }).finally(() => {
                setLoadingClips(false);
            });
    };

    return (
        <Container component="main" maxWidth={"xl"}>
            <Grid container spacing={5} flexDirection={"row-reverse"}>
                <Grid item key={'sideMenu'} xs={12} md={2}>
                    <Box sx={{ ...commonStyles, borderRadius: '16px' }} >
                        <Grid container xs={12} spacing={2} >
                            <SideBarFilterList/>
                            <SideBarCategoryList/>
                            <SideBarChannelList/>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item key={'menu'} xs={12} md={10}>
                    <Grid container xs={12} spacing={5} alignItems="flex-end">
                        <ClipsContainer clips={clips} loadingClips={loadingClips}/>
                        <ClipsPagination loadingClips={loadingClips}/>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}