import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import {useSearchChannelQuery} from "../../../Services/Redux/twitchApi";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {Channel, setIsSelected, setSelectedChannel} from "../../../Services/Redux/channelSlice";
import {debounce} from "../../../Utils/channelUtils";
import {useNavigate} from "react-router-dom";

export interface ChannelOptionLabel {
    display_name: string
}

export default function ChannelFilter() {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const [query, setQuery] = React.useState("");
    const [searchParam, setSearchParam] = React.useState("");
    const {data, isLoading, isUninitialized, isFetching, isSuccess} = useSearchChannelQuery(searchParam);
    const dispatch = useDispatch();
    let history = useNavigate();

    if (data && data.data != null && data.data !== options) {
        if (!isLoading && !isUninitialized && !isFetching && isSuccess) {
            console.log("setting options");
            setOptions(data.data);
        }
    }

    // todo we can add loading as earlier when times comes
    // const loading = open && options.length === 0;

    // useEffect(() => {
    //     let active = true;
    //
    //     if (!loading) {
    //         return undefined;
    //     }
    //
    //     (async () => {
    //         await sleep(1e3); // For demo purposes.
    //        setQuery("ok");
    //
    //         if (active) {
    //             setOptions([...topFilms]);
    //         }
    //     })();
    //
    //     return () => {
    //         active = false;
    //     };
    // }, [loading]);

    const debouncedSearch = React.useMemo(
        () =>
            debounce((val: string) => {
                setSearchParam(val);
            }, 200),
        [setSearchParam]
    )


    const handleChange = React.useCallback(
        val => {
            debouncedSearch(val);
        },
        [debouncedSearch]
    );


    useEffect(() => {
        if (query !== "") {
            handleChange(query);
        }
    }, [query, handleChange]);

    React.useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    function setNewChannel(newChannelId: number) {
        dispatch(setSelectedChannel(options[newChannelId] as Channel));
        dispatch(setIsSelected(true));
        history("/channel");
    }

    return (
        <Autocomplete
            id="asynchronous-demo"
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            isOptionEqualToValue={(option: ChannelOptionLabel, value) => option.display_name === value.display_name}
            getOptionLabel={(option: ChannelOptionLabel) => option.display_name}
            options={options}
            onChange={(e: any) => setNewChannel(e.target.value)}
            // loading={loading}
            onInput={(e: any) => setQuery(e.target.value)}
            sx={{width: '100%', maxWidth: '90%', marginLeft: "0"}}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Search a channel"
                    InputProps={{
                        ...params.InputProps,
                        // todo loading dodac?
                        endAdornment: (
                            <React.Fragment>
                                {false ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        ),
                    }}
                />
            )}
        />
    );
}