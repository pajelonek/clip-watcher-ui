import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import * as React from "react";
import {useEffect, useState} from "react";
import Clip from "./Clip";
import { usePromiseTracker, trackPromise } from "react-promise-tracker";
import BouncingDotsLoader from "./BouncingDotsLoader";

export default function ClipsContainer() {
    const [clips, setClips] = useState(null);
    const { promiseInProgress } = usePromiseTracker();

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

        await trackPromise(
            fetch(process.env.REACT_APP_API_URL + '/clips', requestOptions)
                .then(r => r.json())
                .then(r => setClips(r.data))
                .catch(e => {
                    console.log('error');
                    console.log(e);
                })
            );
    };

    useEffect(() => {
        fetchClips();
    }, []);

    return (
        <Container component="main">
            <Grid container spacing={5} alignItems="flex-end">
                { clips && !promiseInProgress ?
                    clips.map((clip) => (
                        <Grid item key={clip.id} xs={6} sm={4} md={3}>
                            <Clip clip={clip} />
                        </Grid>
                    )) :
                    <Grid item key={'loader'} xs={12}>
                        <BouncingDotsLoader/>
                    </Grid>
                }
            </Grid>
            <Button >Open modal</Button>
        </Container>
    );
}