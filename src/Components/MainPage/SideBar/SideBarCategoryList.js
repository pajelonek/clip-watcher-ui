import * as React from "react";
import Grid from "@mui/material/Grid";
import {Box, FormControl} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useTopCategoryQuery} from "../../../Services/Redux/twitchApi";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import {setCategory} from "../../../Services/Redux/filterSlice";
import {useDispatch} from "react-redux";

export default function SideBarCategoryList() {
    const dispatch = useDispatch();

    const {data, isUninitialized, isLoading} = useTopCategoryQuery('100', {
        refetchOnMountOrArgChange: true
    });

    function replaceMaskUrlWithSize(urlWithMask, size) {
        let log = urlWithMask.replace('{width}', size).replace('{height}', size);
        console.log(log);
        return log;
    }
    return (
        <Box xs={3} lg={12} sx={{
            display: 'flex', flexWrap: 'wrap',
            p: 1, m: 1, bgcolor: 'background.paper',
            borderRadius: 1, maxWidth: '100%'
        }}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography>Category: </Typography>
                </Grid>
                <Grid item xs={12}>
                    <FormControl sx={{m: 1, minWidth: 200}}>
                        <Autocomplete id="searchCategoryAutocomplete" sx={10}
                                      options={!isUninitialized && !isLoading ? data.data : []} autoHighlight
                                      getOptionLabel={(option) => option.name}
                                      onChange={
                                          (event, value) => {
                                              dispatch(setCategory({id: value.id, name: value.name}));
                                          }
                                      }
                                      renderOption={(props, option) => (
                                          <Box component="li" sx={{'& > img': {mr: 2, flexShrink: 0}}} {...props}>
                                              <img
                                                  loading="lazy"
                                                  width="20"
                                                  srcSet={replaceMaskUrlWithSize(option.box_art_url, 20)}
                                                  src={replaceMaskUrlWithSize(option.box_art_url, 20) + ` 2x`}
                                                  alt={option.name}
                                              />
                                              {option.name}
                                          </Box>
                                      )}
                                      renderInput={(params) => (
                                          <TextField
                                              {...params}
                                              label="Choose a category"
                                              inputProps={{
                                                  ...params.inputProps,
                                                  autoComplete: 'new-password', // disable autocomplete and autofill
                                              }}
                                          />
                                      )}
                        />
                    </FormControl>
                </Grid>
            </Grid>
        </Box>
    );
}