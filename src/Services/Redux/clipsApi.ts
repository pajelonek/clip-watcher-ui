import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


function resolveDate(period: string) {
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

export const clipsApi = createApi({
    reducerPath: 'clipsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL
    }),
    endpoints: (builder) => ({
        getClips: builder.query({
            query: (period) => {
                return ({
                    url: '/clips',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Basic ' + btoa(process.env.REACT_APP_API_AUTH_USERNAME + ':' + process.env.REACT_APP_API_AUTH_PASSWORD),
                    },
                    body: {
                        "gameId": "509658",
                        "first": "24",
                        "endedAt": new Date().toISOString(),
                        "startedAt":  resolveDate(period).toISOString()
                    }
                });
            },
        }),
    }),
})

export const {useGetClipsQuery} = clipsApi
