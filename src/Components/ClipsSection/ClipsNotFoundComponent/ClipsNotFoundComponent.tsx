import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {useDispatch, useSelector} from "react-redux";
import {CursorState, selectCursor, setIsDisablePagination} from "../../../Services/Reducers/cursorSlice";

export default function ClipsNotFoundComponent() {
    const savedCursor: CursorState = useSelector(selectCursor);
    const dispatch = useDispatch();
    if (!savedCursor.isDisabledPagination) {
        dispatch(setIsDisablePagination(true));
    }
    return (
        <Grid item xs={12} justifyContent={"center"} textAlign={"center"} height={"30vh"}>
            <Typography variant={"h3"}>
                CLIPS NOT FOUND :(
            </Typography>
        </Grid>
    );
}