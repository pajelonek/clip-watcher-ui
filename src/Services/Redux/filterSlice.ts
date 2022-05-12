import {createSlice} from '@reduxjs/toolkit'

export interface FilterState {
    period: string,
    category: CategoryState,
    cursor: string
}

export interface CategoryState {
    id: number,
    name: string
}

const initialState = {
    period: 'today',
    category: {
        id: 509658,
        name: 'Just Chatting',
        box_art_url: null
    },
    cursor: ''
} as FilterState;

export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setPeriod(state, action) {
            state.period = action.payload
        },
        setCategory(state, action) {
            state.category = action.payload
        },
        setCursor(state, action) {
            state.cursor = action.payload
        }
    }
})

export const selectPeriod = (state: any) => state.filter.period;
export const selectCategory = (state: any) => state.filter.category;
export const selectCursor = (state: any) => state.filter.cursor;

export const {setPeriod, setCategory, setCursor} = filterSlice.actions

export default filterSlice.reducer