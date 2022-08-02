import {createSlice} from '@reduxjs/toolkit'

export interface CursorState {
    currentPage: number
    cursorList: string[],
    direction: string,
    isDisabledPagination: boolean
}

export const cursorSliceInitialState = {
    currentPage: 0,
    cursorList: [""],
    direction: 'after',
    isDisabledPagination: false
} as CursorState;

export const cursorSlice = createSlice({
    name: 'cursor',
    initialState: cursorSliceInitialState,
    reducers: {
        setCursor(state, action) {
            state.currentPage = action.payload.currentPage;
            state.cursorList = action.payload.cursorList;
        },
        clearCursorList(state) {
            state.currentPage = cursorSliceInitialState.currentPage;
            state.cursorList = cursorSliceInitialState.cursorList;
            state.direction = cursorSliceInitialState.direction;
            state.isDisabledPagination = cursorSliceInitialState.isDisabledPagination;
        },
        addNewCursorToContext(state, action) {
            const exists = state.cursorList.some(cursor => (cursor === action.payload));
            if (!exists && action.payload != null) {
                state.cursorList[state.currentPage + 1] = action.payload;
            }
        },
        goForwardWithCursor(state) {
            state.currentPage = state.currentPage + 1;
        },
        goBackWithCursor(state) {
            if (state.currentPage - 1 >= 0) {
                state.currentPage = state.currentPage - 1;
            } else {
                state.currentPage = 0;
            }
        },
        setDirectionOfCursor(state, action) {
            state.direction = action.payload;
        },
        setIsDisablePagination(state, action) {
            state.isDisabledPagination = action.payload;
        }
    }
})

export const selectCursor = (state: any) => state.cursor;

export const {
    setCursor,
    addNewCursorToContext,
    goBackWithCursor,
    setDirectionOfCursor,
    goForwardWithCursor,
    clearCursorList,
    setIsDisablePagination
} = cursorSlice.actions

export default cursorSlice.reducer