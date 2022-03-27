import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import * as React from "react";
import {useEffect, useState} from "react";
import Clip from "./Clip";
import BouncingDotsLoader from "./BouncingDotsLoader";
import {FormControl, InputLabel, NativeSelect} from "@mui/material";

export default function ClipsContainer() {
    const [clips, setClips] = useState(null);
    const [loadingClips, setLoadingClips] = useState(false);

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

    useEffect(() => {
        fetchClips();
    }, []);

    return (
        <Container component="main" maxWidth={"xl"}>
            <Grid container spacing={5}>
                <Grid item key={'menu'} xs={10}>
                    <Grid container xs={12} spacing={5} alignItems="flex-end">
                    {clips && !loadingClips ?
                        clips.map((clip) => (
                            <Grid item key={clip.id} xs={6} sm={4} md={3}>
                                <Clip clip={clip}/>
                            </Grid>
                        )) :
                        <Grid item key={'loader'} xs={12}>
                            <BouncingDotsLoader/>
                        </Grid>
                    }
                </Grid>
                </Grid>
                <Grid item key={'sideMenu'} xs={2}>
                    <Grid container xs={12}>
                    <FormControl fullWidth>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Age
                        </InputLabel>
                        <NativeSelect
                            defaultValue={30}
                            inputProps={{
                                name: 'age',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </NativeSelect>
                    </FormControl>
                </Grid>
                </Grid>
            </Grid>

        </Container>
    );
}