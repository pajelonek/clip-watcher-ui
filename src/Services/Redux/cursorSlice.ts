import {createSlice} from '@reduxjs/toolkit'

export interface CursorState {
    currentPage: number
    cursorList: string[],
    direction: string
}

const initialState = {
    currentPage: 0,
    cursorList: [],
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
        },
        setNextCursorForPage(state, action) {
            state.currentPage = initialState.currentPage;
            state.cursorList = action.payload;
        },
        addNewCursorToContext(state, action) {
            console.log('adding cursor to context if');
            const exists = state.cursorList.some(cursor => (cursor === action.payload));
            if (!exists && action.payload != null) {
                console.log('adding cursor');
                state.cursorList[state.currentPage] = action.payload;
                console.log(state.cursorList.length);
            }
            if (state.direction !== 'before') {
                console.log("old current page = " + state.currentPage);
                state.currentPage = state.currentPage + 1;
                console.log("new current page = " + state.currentPage);
            }
        },
        goBackWithCursor(state) {
            console.log('going back');
            console.log('OLD current page = ' + state.currentPage);
            state.currentPage = state.currentPage - 1;
            console.log('NEW current page = ' + state.currentPage);
        },
        setDirectionOfCursor(state, action) {
            console.log('old direction = ' + state.direction);
            state.direction = action.payload;
            console.log('NEW direction = ' + action.payload);
        }
    }
})

export const selectCursor = (state: any) => state.cursor;

export const {addNewCursorToContext, goBackWithCursor, setDirectionOfCursor} = cursorSlice.actions

export default cursorSlice.reducer