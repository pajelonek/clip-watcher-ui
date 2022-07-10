import {createSlice} from '@reduxjs/toolkit'

export interface PageState {
    value: number
}

export const pagesSliceInitialState = {
    value: 0,
} as PageState;

export const pagesSlice = createSlice({
    name: 'pages',
    initialState: pagesSliceInitialState,
    reducers: {
        setPage(state, action) {
            state.value = action.payload
        },
        clearPage(state) {
            state.value = pagesSliceInitialState.value
        }
    }
})

export const selectPage = (state: any) => state.page.value;

export const {setPage, clearPage} = pagesSlice.actions

export default pagesSlice.reducer