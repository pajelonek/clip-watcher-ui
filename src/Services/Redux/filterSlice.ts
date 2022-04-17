import {createSlice} from '@reduxjs/toolkit'

export interface FilterState {
    period: string,
    category: CategoryState
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
    }
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
        }
    }
})

export const selectPeriod = (state: any) => state.filter.period;
export const selectCategory = (state: any) => state.filter.category;

export const {setPeriod, setCategory} = filterSlice.actions

export default filterSlice.reducer