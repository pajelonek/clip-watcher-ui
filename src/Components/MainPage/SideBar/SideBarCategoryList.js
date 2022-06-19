import * as React from "react";
import Grid from "@mui/material/Grid";
import {Box, FormControl, Input, InputAdornment, InputLabel} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useTopCategoryQuery} from "../../../Services/Redux/twitchApi";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import {selectCategory, setCategory} from "../../../Services/Redux/filterSlice";
import {useDispatch, useSelector} from "react-redux";
import {AccountCircle} from "@mui/icons-material";

function replaceMaskUrlWithSize(urlWithMask, width, height) {
    return urlWithMask.replace('{width}', width).replace('{height}', height);
}

export default function SideBarCategoryList() {
    const dispatch = useDispatch();
    const category = useSelector(selectCategory);

    const {data, isUninitialized, isLoading} = useTopCategoryQuery('100');

    function replaceMaskUrlWithSize(urlWithMask, size) {
        return urlWithMask.replace('{width}', size).replace('{height}', size);
    }

    return (
        <Box xs={3} lg={12} sx={{
            display: 'flex', flexWrap: 'wrap',
            p: 1, m: 1, borderRadius: 1,
            maxWidth: '100%'
        }}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography>Category: </Typography>
                </Grid>
                <Grid item xs={12}>
                    <FormControl sx={{m: 1, width: '100%', maxWidth: '90%', marginLeft: '0'}}>
                        <Autocomplete id="searchCategoryAutocomplete"
                                      options={!isUninitialized && !isLoading ? data.data : []} autoHighlight
                                      getOptionLabel={(option) => option.name}

                                      onChange={
                                          (event, value) => {
                                              dispatch(setCategory({
                                                  id: value.id,
                                                  name: value.name,
                                                  box_art_url: value.box_art_url
                                              }));
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
                                          <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                                              <TextField
                                                  id="input-with-icon-textfield"
                                                  {...params}
                                                  inputProps={{
                                                      ...params.inputProps,
                                                      autoComplete: 'new-password', // disable autocomplete and autofill
                                                  }}
                                              />
                                          </Box>
                                      )}
                        />
                    </FormControl>
                </Grid>
            </Grid>
        </Box>
    );
}