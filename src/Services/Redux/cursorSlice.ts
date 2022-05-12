import {createSlice} from '@reduxjs/toolkit'

export interface CursorState {
    cursor: string
}

const initialState = {
    cursor: ''
} as CursorState;

export const cursorSlice = createSlice({
    name: 'cursor',
    initialState,
    reducers: {
        setCursor(state, action) {
            state.cursor = action.payload
        }
    }
})


export const selectCursor = (state: any) => state.filter.cursor;

export const {setCursor} = cursorSlice.actions

export default cursorSlice.reducer