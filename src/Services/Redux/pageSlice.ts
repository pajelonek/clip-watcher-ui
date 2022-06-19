import {createSlice} from '@reduxjs/toolkit'

export interface PageState {
    value: number
}

const initialState = {
    value: 0,
} as PageState;

export const pagesSlice = createSlice({
    name: 'pages',
    initialState,
    reducers: {
        setPage(state, action) {
            state.value = action.payload
        },
        clearPage(state) {
            state.value = initialState.value
        }
    }
})

export const selectPage = (state: any) => state.page.value;

export const {setPage, clearPage} = pagesSlice.actions

export default pagesSlice.reducer