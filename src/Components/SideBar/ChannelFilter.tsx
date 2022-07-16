import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import {useSearchChannelQuery} from "../../Middleware/twitchApi";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {debounce} from "../../Services/Utils/channelUtils";
import {useNavigate} from "react-router-dom";
import {Channel, setIsSelected, setSelectedChannel} from "../../Services/Reducers/filterSlice";

export interface ChannelOptionLabel {
    display_name: string
}

export default function ChannelFilter(props: any) {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const [query, setQuery] = React.useState("");
    const [searchParam, setSearchParam] = React.useState("");
    const dispatch = useDispatch();
    let history = useNavigate();

    const {data, isLoading, isUninitialized, isFetching, isSuccess} = useSearchChannelQuery(searchParam);

    if (data && data.data != null && data.data !== options) {
        if (!isLoading && !isUninitialized && !isFetching && isSuccess) {
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
    }, [open]); // todo search results doesnt dissapear after not chosing one, popraw

    function setNewChannel(newChannelId: number) {
        dispatch(setSelectedChannel(options[newChannelId] as Channel));
        dispatch(setIsSelected(true));
        // todo clear previous data which may cause troubles like cursor and so on
        // todo after clicking channel, you need to put channel name into the UI
        // todo after removing channel, get back to default category
        // todo after clicking channel reset period, cursor and so on
        // todo add to this filter channel image as in categories
        history("/channel");
    }

    return (
        <Autocomplete
            id="sideBar-channelFilterAutocomplete"
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
            sx={{width: '100%', maxWidth: '100%', marginLeft: "0"}}
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
            {...props}
        />
    );
}