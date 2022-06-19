import * as React from 'react';
import Stack from '@mui/material/Stack';
import Grid from "@mui/material/Grid";
import {TablePagination} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setCursor} from "../../../Services/Redux/filterSlice";
import {CursorState, selectCursor, goBackWithCursor, setDirectionOfCursor} from "../../../Services/Redux/cursorSlice";

export default function ClipsPagination(props: any) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(24);
    const dispatch = useDispatch();
    const savedCursor: CursorState = useSelector(selectCursor);

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
        console.log("new page = " + newPage);
        console.log("old page = " + page);
        if (newPage > page) {
            console.log("current page " + savedCursor.currentPage);
            dispatch(setDirectionOfCursor("after"));
            dispatch(setCursor({
                value: savedCursor.cursorList[savedCursor.currentPage - 1],
            }));
        }
        else {
            console.log('go back validation');
            dispatch(setDirectionOfCursor("before"));
            if (savedCursor.currentPage - 2 <= 0) {
                console.log('first page');
                dispatch(setCursor({
                    value: null,
                }));
            }
            else {
                console.log('other page' + savedCursor.currentPage);
                console.log(savedCursor.cursorList.length);
                console.log(savedCursor.cursorList[savedCursor.currentPage - 2]);
                dispatch(setCursor({
                    value: savedCursor.cursorList[savedCursor.currentPage - 2],
                }));
            }
            dispatch(goBackWithCursor());
        }
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => { // todo clear
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

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