import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {FilterState} from "../Services/Reducers/filterSlice";

function resolveDate(period: string) : Date {
    let date = new Date();
    let minusDays;
    switch(period) {
        case 'today':
            minusDays = 1;
            break;
        case 'week':
            minusDays = 7;
            break;
        case 'month':
            minusDays = 31;
            break;
        case 'all_time':
            minusDays = 3650;
            break;
        default:
            minusDays = 1;
            break;
    }
    date.setDate(date.getDate() - minusDays);
    return date;
}

const twitchApiHeaders = {
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + btoa(process.env.REACT_APP_API_AUTH_USERNAME + ':' + process.env.REACT_APP_API_AUTH_PASSWORD),
}

export const twitchApi = createApi({
    reducerPath: 'clipsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL
    }),
    refetchOnMountOrArgChange : true,
    tagTypes: ['Clips'],
    endpoints: (builder) => ({
        getClips: builder.query({
            query: (filterState: FilterState) => {
                return ({
                    url: '/clips',
                    method: 'POST',
                    headers: twitchApiHeaders,
                    body: {
                        "gameId": filterState.channel.isSelected ? null : filterState.category.id,
                        "broadcasterId": filterState.channel.isSelected ? filterState.channel.selectedChannel.id : null,
                        "first": "24",
                        "endedAt": new Date().toISOString(),
                        "startedAt": resolveDate(filterState.period).toISOString(),
                        "after": filterState.cursor.value,
                    }
                });
            },
            providesTags: ['Clips']
        }),
        searchCategory: builder.query({
            query: (query) => {
                return ({
                    url: '/categories/search?query=' + query,
                    method: 'GET',
                    headers: twitchApiHeaders
                });
            },
        }),
        topCategory: builder.query({
            query: (first) => {
                return ({
                    url: '/categories/top',
                    method: 'POST',
                    headers: twitchApiHeaders,
                    body: {
                        "first": first
                    }
                });
            },
        }),
        searchChannel: builder.query({
            query: (query) => {
                return ({
                    url: '/channels/search?query=' + query,
                    method: 'GET',
                    headers: twitchApiHeaders
                });
            },
        }),
        topStreams: builder.query({
            query: () => {
                return ({
                    url: '/streams/top',
                    method: 'GET',
                    headers: twitchApiHeaders
                });
            },
        }),
    }),
})

export const {useGetClipsQuery, useSearchCategoryQuery, useTopCategoryQuery, useSearchChannelQuery, useTopStreamsQuery} = twitchApi
