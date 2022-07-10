import {createSlice} from '@reduxjs/toolkit'

export interface FilterState {
    period: string,
    category: CategoryState,
    channel: ChannelState;
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

export interface ChannelState {
    isSelected: boolean,
    selectedChannel: Channel,
}

export interface Channel {
    broadcaster_language: string,
    broadcaster_login: string,
    display_name: string,
    game_id: string,
    game_name: string,
    id: string,
    is_live: boolean | null,
    tag_ids: string[] | null,
    thumbnail_url: string,
    title: string,
    started_at: string,
    _live: boolean | null
}

export const filterSliceInitialState = {
    period: 'today',
    category: {
        id: 509658,
        name: 'Just Chatting',
        box_art_url: "https://static-cdn.jtvnw.net/ttv-boxart/509658-{width}x{height}.jpg"
    },
    channel: {
        isSelected: false,
        selectedChannel: {
            "broadcaster_language": "",
            "broadcaster_login": "",
            "display_name": "",
            "game_id": "",
            "game_name": "",
            "id": "",
            "is_live": null,
            "tag_ids": null,
            "thumbnail_url": "",
            "title": "",
            "started_at": "",
            "_live": false
        }
    },
    cursor: {
        value: ''
    },
} as FilterState;

export const filterSlice = createSlice({
    name: 'filters',
    initialState: filterSliceInitialState,
    reducers: {
        setPeriod(state, action) {
            state.period = action.payload;
            state.cursor = filterSliceInitialState.cursor;
        },
        setCategory(state, action) {
            state.category = action.payload;
            state.cursor = filterSliceInitialState.cursor;
        },
        setCursor(state, action) {
            state.cursor = action.payload;
        },
        clearState(state) {
            state.category = filterSliceInitialState.category;
            state.cursor = filterSliceInitialState.cursor;
            state.period = filterSliceInitialState.period;
        },
        setChannelState(state, action) {
            state.channel.isSelected = action.payload.isSelected;
            state.channel.selectedChannel = action.payload.channel;
        },
        setIsSelected(state, action) {
            state.channel.isSelected = action.payload;
        },
        setSelectedChannel(state, action) {
            state.channel.selectedChannel = action.payload;
        },
    }
})

export const selectIsSelected = (state: any) => state.filter.channel.isSelected;
export const selectChannel = (state: any) => state.filter.channel.selectedChannel;
export const selectChannelState = (state: any) => state.filter.channel;

export const selectPeriod = (state: any) => state.filter.period;
export const selectCategory = (state: any) => state.filter.category;
export const selectCursor = (state: any) => state.filter.cursor;

export const {setPeriod, setCategory, setCursor, clearState, setChannelState, setIsSelected, setSelectedChannel} = filterSlice.actions

export default filterSlice.reducer