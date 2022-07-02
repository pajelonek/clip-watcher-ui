import {createSlice} from '@reduxjs/toolkit'

export interface FilterState {
    period: string,
    category: CategoryState,
    cursor: CursorState
}
export interface CursorState {
    value: string | null
}

export interface CategoryState {
    id: number,
    name: string,
    box_art_url: string
}

const initialState = {
    period: 'today',
    category: {
        id: 509658,
        name: 'Just Chatting',
        box_art_url: "https://static-cdn.jtvnw.net/ttv-boxart/509658-{width}x{height}.jpg"
    },
    cursor: {
        value: ''
    }
} as FilterState;

export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setPeriod(state, action) {
            state.period = action.payload
            state.cursor = initialState.cursor
        },
        setCategory(state, action) {
            state.category = action.payload
            state.cursor = initialState.cursor
        },
        setCursor(state, action) {
            state.cursor = action.payload
        },
        clearState(state) {
            state.category = initialState.category
            state.cursor = initialState.cursor
            state.period = initialState.period
        }
    }
})

export const selectPeriod = (state: any) => state.filter.period;
export const selectCategory = (state: any) => state.filter.category;
export const selectCursor = (state: any) => state.filter.cursor;

export const {setPeriod, setCategory, setCursor, clearState} = filterSlice.actions

export default filterSlice.reducer