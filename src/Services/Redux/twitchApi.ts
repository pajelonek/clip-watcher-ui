import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {FilterState} from "./filterSlice";

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

export const twitchApi = createApi({
    reducerPath: 'clipsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL
    }),
    endpoints: (builder) => ({
        getClips: builder.query({
            query: (filterState: FilterState) => {
                console.log(filterState);
                return ({
                    url: '/clips',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Basic ' + btoa(process.env.REACT_APP_API_AUTH_USERNAME + ':' + process.env.REACT_APP_API_AUTH_PASSWORD),
                    },
                    body: {
                        "gameId": filterState.category.id,
                        "first": "24",
                        "endedAt": new Date().toISOString(),
                        "startedAt":  resolveDate(filterState.period).toISOString()
                    }
                });
            },
        }),
        searchCategory: builder.query({
            query: (query) => {
                return ({
                    url: '/categories/search?query=' + query,
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Basic ' + btoa(process.env.REACT_APP_API_AUTH_USERNAME + ':' + process.env.REACT_APP_API_AUTH_PASSWORD),
                    }
                });
            },
        }),
        topCategory: builder.query({
            query: (first) => {
                return ({
                    url: '/categories/top',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Basic ' + btoa(process.env.REACT_APP_API_AUTH_USERNAME + ':' + process.env.REACT_APP_API_AUTH_PASSWORD),
                    },
                    body: {
                        "first": first
                    }
                });
            },
        }),
    }),
})

export const {useGetClipsQuery, useSearchCategoryQuery, useTopCategoryQuery} = twitchApi
