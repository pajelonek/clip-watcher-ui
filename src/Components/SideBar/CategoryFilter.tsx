import * as React from 'react';
import Autocomplete from "@mui/material/Autocomplete";
import {clearCursorList} from "../../Services/Reducers/cursorSlice";
import {clearPage} from "../../Services/Reducers/pageSlice";
import {clearSelectedChannel, selectCategory, setCategory} from "../../Services/Reducers/filterSlice";
import {Box} from "@mui/material";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import {useDispatch, useSelector} from "react-redux";
import {useTopCategoryQuery} from "../../Middleware/twitchApi";

function replaceMaskUrlWithSize(urlWithMask: string, size: string) {
    return urlWithMask.replace('{width}', size).replace('{height}', size);
}

export default function CategoryFilter() {
    const category = useSelector(selectCategory);
    const {data} = useTopCategoryQuery('100');
    const dispatch = useDispatch();

    return (
        <FormControl sx={{m: 1, marginLeft: '0'}} fullWidth>
            <Autocomplete id="searchCategoryAutocomplete"
                          disableClearable
                          autoHighlight

                          options={data?.data ? data.data : []}

                          defaultValue={{name: category.name}}

                          getOptionLabel={(option) => option.name}
                          isOptionEqualToValue={(option, value) => option.name === value.name}

                          onChange={
                              (_event, value: any, reason: string) => {
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

                          renderOption={(props, option: any) => (
                              <Box component="li" sx={{'& > img': {mr: 2, flexShrink: 0}}} {...props}>
                                  <img
                                      loading="lazy"
                                      width="20"
                                      srcSet={replaceMaskUrlWithSize(option.box_art_url, "20")}
                                      src={replaceMaskUrlWithSize(option.box_art_url, "20") + ` 2x`}
                                      alt={option.name}
                                  />
                                  {option.name}
                              </Box>
                          )}

                          renderInput={(params) => (
                              <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                                  <TextField
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
    );
}