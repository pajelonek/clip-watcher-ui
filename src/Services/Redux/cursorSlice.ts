import {createSlice} from '@reduxjs/toolkit'

export interface CursorState {
    currentPage: number
    cursorList: string[],
    direction: string
}

const initialState = {
    currentPage: 0,
    cursorList: [""],
    direction: 'after'
} as CursorState;

export const cursorSlice = createSlice({
    name: 'cursor',
    initialState,
    reducers: {
        setCursor(state, action) {
            state.currentPage = action.payload.currentPage;
            state.cursorList = action.payload.cursorList;
        },
        clearCursorList(state) {
            state.currentPage = initialState.currentPage;
            state.cursorList = initialState.cursorList;
            state.direction = initialState.direction;
        },
        setNextCursorForPage(state, action) {
            state.currentPage = initialState.currentPage;
            state.cursorList = action.payload;
        },
        addNewCursorToContext(state, action) {
            const exists = state.cursorList.some(cursor => (cursor === action.payload));
            if (!exists && action.payload != null) {
                state.cursorList[state.currentPage + 1] = action.payload;
                state.cursorList.forEach(cursor => (console.log(cursor)));
            }
        },
        goForwardWithCursor(state) {
            state.currentPage = state.currentPage + 1;
        },
        goBackWithCursor(state) {
            state.currentPage = state.currentPage - 1;
        },
        setDirectionOfCursor(state, action) {
            state.direction = action.payload;
        }
    }
})

export const selectCursor = (state: any) => state.cursor;

export const {addNewCursorToContext, goBackWithCursor, setDirectionOfCursor, goForwardWithCursor, clearCursorList} = cursorSlice.actions

export default cursorSlice.reducer