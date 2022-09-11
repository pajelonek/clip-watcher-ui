import * as React from 'react';
import Stack from '@mui/material/Stack';
import Grid from "@mui/material/Grid";
import {TablePagination} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {changeClipsPerPage, setCursor} from "../../Services/Reducers/filterSlice";
import {
    CursorState,
    selectCursor,
    goBackWithCursor,
    setDirectionOfCursor,
    goForwardWithCursor, addNewCursorToContext, clearCursorList
} from "../../Services/Reducers/cursorSlice";
import {selectPage, setPage} from "../../Services/Reducers/pageSlice";

export default function ClipsPagination(props: any) {
    const page: number = useSelector(selectPage);
    const [rowsPerPage, setRowsPerPage] = React.useState(24);
    const dispatch = useDispatch();
    const savedCursor: CursorState = useSelector(selectCursor);

    if (!props.loadingClips && !props.isUninitialized && !props.isFetching && props.isSuccess) {
        dispatch(addNewCursorToContext(props.cursor));
    }

    const handleChangePage = (
        _event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        if (newPage > page) {
            dispatch(setDirectionOfCursor("after"));
            dispatch(setCursor(savedCursor.cursorList[savedCursor.currentPage + 1]));
            dispatch(goForwardWithCursor());
        }
        else {
            dispatch(setDirectionOfCursor("before"));
            if (savedCursor.currentPage - 1 <= 0) {
                dispatch(setCursor(null));
            }
            else {
                dispatch(setCursor(savedCursor.cursorList[savedCursor.currentPage - 1]));
            }
            dispatch(goBackWithCursor());
        }
        dispatch(setPage(newPage));
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
        dispatch(clearCursorList());
        dispatch(changeClipsPerPage(parseInt(event.target.value, 10)));
    };

    return (
        !props.loadingClips ?
            <Grid item key={'pagination'} xs={12} marginTop={'3%'}>
                <Stack spacing={2}>
                    <TablePagination
                        SelectProps={{
                            disabled: savedCursor.isDisabledPagination
                        }}
                        backIconButtonProps={
                            savedCursor.isDisabledPagination
                                ? {
                                    disabled: savedCursor.isDisabledPagination
                                }
                                : undefined
                        }
                        nextIconButtonProps={
                            savedCursor.isDisabledPagination
                                ? {
                                    disabled: savedCursor.isDisabledPagination
                                }
                                : undefined
                        }
                        component="div"
                        count={1000}
                        page={page}
                        onPageChange={handleChangePage}
                        rowsPerPage={rowsPerPage}
                        rowsPerPageOptions={[24,48,72]}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        style={{margin: "auto"}}
                        data-testid={props.dataTestId}
                    />
                </Stack>
            </Grid>
            : null
    );
}