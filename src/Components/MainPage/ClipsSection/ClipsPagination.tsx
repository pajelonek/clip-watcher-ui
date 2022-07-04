import * as React from 'react';
import Stack from '@mui/material/Stack';
import Grid from "@mui/material/Grid";
import {TablePagination} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setCursor} from "../../../Services/Redux/filterSlice";
import {
    CursorState,
    selectCursor,
    goBackWithCursor,
    setDirectionOfCursor,
    goForwardWithCursor
} from "../../../Services/Redux/cursorSlice";
import {selectPage, setPage} from "../../../Services/Redux/pageSlice";

export default function ClipsPagination(props: any) {
    const page: number = useSelector(selectPage);
    const [rowsPerPage, setRowsPerPage] = React.useState(24);
    const dispatch = useDispatch();
    const savedCursor: CursorState = useSelector(selectCursor);

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        if (newPage > page) {
            dispatch(setDirectionOfCursor("after"));
            dispatch(setCursor({
                value: savedCursor.cursorList[savedCursor.currentPage + 1],
            }));
            dispatch(goForwardWithCursor());
        }
        else {
            dispatch(setDirectionOfCursor("before"));
            if (savedCursor.currentPage - 1 <= 0) {
                dispatch(setCursor({
                    value: null,
                }));
            }
            else {
                dispatch(setCursor({
                    value: savedCursor.cursorList[savedCursor.currentPage - 1],
                }));
            }
            dispatch(goBackWithCursor());
        }
        dispatch(setPage(newPage));
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => { // todo clear
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
 // todo jak nie ma klipow to nie ma oblugi, trzeba cos dodac gdy 1) klipow w ogole nie ma, 2) cursor się blokuje
    return (
        !props.loadingClips ?
            <Grid item key={'pagination'} xs={12} marginTop={'3%'}>
                <Stack spacing={2}>
                    <TablePagination
                        component="div"
                        count={100}
                        page={page}
                        onPageChange={handleChangePage}
                        rowsPerPage={rowsPerPage}
                        rowsPerPageOptions={[24,48,72]}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        style={{margin: "auto"}}
                    />
                </Stack>
            </Grid>
            : null
    );
}