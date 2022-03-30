import { createSlice } from '@reduxjs/toolkit'

export const periodSlice = createSlice({
    name: 'period',
    initialState: {
        value: 'today'
    },
    reducers: {
        setPeriod(state, action) {
            return {
                ...state,
                value: action.payload
            }
        }
    }
})

export const selectPeriod = (state) => state.period.value;

export const { setPeriod } = periodSlice.actions

export default periodSlice.reducer