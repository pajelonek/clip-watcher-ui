import * as React from "react";
import Grid from "@mui/material/Grid";
import {Box, FormControl} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useTopCategoryQuery} from "../../Middleware/twitchApi";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import {
    clearSelectedChannel,
    selectCategory,
    setCategory
} from "../../Services/Reducers/filterSlice";
import {useDispatch, useSelector} from "react-redux";
import {clearCursorList} from "../../Services/Reducers/cursorSlice";
import {clearPage} from "../../Services/Reducers/pageSlice";

function replaceMaskUrlWithSize(urlWithMask, size) {
    return urlWithMask.replace('{width}', size).replace('{height}', size);
}

export default function SideBarCategoryList(props) {

    const category = useSelector(selectCategory);
    const {data} = useTopCategoryQuery('100');
    const dispatch = useDispatch();

    const sideBarCategoryBoxStyles = {
        display: 'flex',
        flexWrap: 'wrap',
        p: 1, m: 1,
        borderRadius: 1,
        maxWidth: '100%'
    };

    return (
        <Box xs={3} lg={12} sx={{...sideBarCategoryBoxStyles}} {...props}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography>Category: </Typography>
                </Grid>
                <Grid item xs={12}>
                    <FormControl sx={{m: 1, marginLeft: '0'}} fullWidth>
                        <Autocomplete id="searchCategoryAutocomplete"
                                      disableClearable
                                      autoHighlight

                                      options={data?.data ? data.data : []}

                                      defaultValue={{name: category.name}}

                                      getOptionLabel={(option) => option.name}
                                      isOptionEqualToValue={(option, value) => option.name === value.name}

                                      onChange={
                                          (_event, value, reason) => {
                                              if (reason === 'selectOption') {
                                                  dispatch(clearCursorList());
                                                  dispatch(clearPage());
                                                  dispatch(setCategory({
                                                      id: value.id,
                                                      name: value.name,
                                                      box_art_url: value.box_art_url
                                                  }));
                                                  dispatch(clearSelectedChannel());
                                              }
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
                                                      value: "",
                                                      placeholder: "Search a category",
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