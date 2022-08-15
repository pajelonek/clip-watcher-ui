import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {useSearchChannelQuery} from "../../../Middleware/twitchApi";
import {useDispatch} from "react-redux";
import {debounce} from "../../../Services/Utils/channelUtils";
import {useNavigate} from "react-router-dom";
import {
    clearPeriod,
    clearSelectedCategory,
    setIsSelected,
    setSelectedChannel
} from "../../../Services/Reducers/filterSlice";
import {Box} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import {clearPage} from "../../../Services/Reducers/pageSlice";
import {clearCursorList} from "../../../Services/Reducers/cursorSlice";

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

    React.useEffect(() => {
        if (query !== "") {
            handleChange(query);
        }
    }, [query, handleChange]);

    React.useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    function setNewChannel(_event: React.SyntheticEvent, value: any, reason: string) {
        if (reason === "selectOption") {
            dispatch(setSelectedChannel(value));
            dispatch(setIsSelected(true));
            dispatch(clearSelectedCategory());
            dispatch(clearPeriod());
            dispatch(clearPage());
            dispatch(clearCursorList());
            history("/channel");
        }
    }

    return (
        <Grid item xs={12}>
            <FormControl sx={{m: 1, marginLeft: '0'}} fullWidth>
                <Autocomplete
                    id="sideBar-channelFilterAutocomplete"
                    open={open}
                    onOpen={() => {
                        setOpen(true);
                    }}
                    onClose={() => {
                        setOpen(false);
                    }}
                    disableClearable
                    isOptionEqualToValue={(option: ChannelOptionLabel, value: string) => option.display_name === value}
                    getOptionLabel={(option: ChannelOptionLabel) => option.display_name ? option.display_name : ''}
                    options={options}
                    onChange={(_event, value, reason) => setNewChannel(_event, value, reason)}
                    onInput={(e: any) => {setQuery(e.target.value)}}
                    sx={{width: '100%', maxWidth: '100%', marginLeft: "0"}}
                    renderInput={(params) => (
                        <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                            <TextField
                                {...params}
                                inputProps={{
                                    ...params.inputProps,
                                    placeholder: "Search a channel",
                                    autoComplete: 'new-password',
                                }}
                            />
                        </Box>
                    )}
                    {...props}
                />
            </FormControl>
        </Grid>
    );
}