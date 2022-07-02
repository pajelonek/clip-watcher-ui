import {createSlice} from '@reduxjs/toolkit'

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

const initialState = {
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

} as ChannelState;

export const channelSlice = createSlice({
    name: 'channels',
    initialState,
    reducers: {
        setChannelState(state, action) {
            state.isSelected = action.payload.isSelecte
            state.selectedChannel = action.payload.channel
        },
        setIsSelected(state, action) {
            state.isSelected = action.payload
        },
        setSelectedChannel(state, action) {
            state.selectedChannel = action.payload
        },
    }
})


export const selectIsSelected = (state: any) => state.channel.isSelected;
export const selectChannel = (state: any) => state.channel.selectedChannel;

export const {setChannelState, setIsSelected, setSelectedChannel} = channelSlice.actions

export default channelSlice.reducer
