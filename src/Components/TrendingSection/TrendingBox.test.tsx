import React from 'react';
import {screen, waitFor} from '@testing-library/react';
import TrendingBox from './TrendingBox';
import {renderWithProviders} from "../../tests/test-utils";
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { configure } from '@testing-library/dom'
configure({ asyncUtilTimeout: 50000 })

describe('renders trending box component', () => {
    const handlers = [
        rest.get('http://localhost:8080/streams/top', (req, res, ctx) => {
            return res(ctx.json(sample_response_top_streams))
        })
    ]

    const server = setupServer(...handlers)

    beforeAll(async () => server.listen())

    afterEach(() => server.resetHandlers())

    afterAll(() => server.close())


    it('should not get element by Id', () => {
        renderWithProviders(<TrendingBox data-testid={"trendingBox-container"}/>, {});
        const trendingBoxContainer = screen.queryByTestId("trendingBox-container");
        expect(trendingBoxContainer).toBeNull();
    });

    it('should get element by Id', async () => {
        renderWithProviders(<TrendingBox data-testid={"trendingBox-container"}/>, {});
        await waitFor(() => {
            const trendingBoxContainer = screen.getByTestId("trendingBox-container");
            expect(trendingBoxContainer).toBeInTheDocument();
        });

    });

})


const sample_response_top_streams = {
    "data": [
        {
            "id": "45770508668",
            "user_id": "31239503",
            "user_login": "esl_csgo",
            "user_name": "ESL_CSGO",
            "game_id": "32399",
            "game_name": "Counter-Strike: Global Offensive",
            "type": "live",
            "title": "LIVE: NAVI vs FaZe Clan - IEM Cologne 2022 - Grand Final",
            "viewer_count": 355630,
            "started_at": "2022-07-17T12:56:52Z",
            "language": "en",
            "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_esl_csgo-{width}x{height}.jpg",
            "tag_ids": [
                "36a89a80-4fcd-4b74-b3d2-2c6fd9b30c95",
                "6ea6bca4-4712-4ab9-a906-e3336a9d8039"
            ],
            "is_mature": false,
            "_mature": false
        },
        {
            "id": "39634865496",
            "user_id": "213748641",
            "user_login": "csgo_mc",
            "user_name": "csgo_mc",
            "game_id": "32399",
            "game_name": "Counter-Strike: Global Offensive",
            "type": "live",
            "title": "FaZe vs NAVI (1-1) BO5 | IEM Cologne 2022 Grand Final by @okroshkaTV & @LeniniwTv",
            "viewer_count": 193944,
            "started_at": "2022-07-17T13:18:07Z",
            "language": "ru",
            "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_csgo_mc-{width}x{height}.jpg",
            "tag_ids": [
                "36a89a80-4fcd-4b74-b3d2-2c6fd9b30c95",
                "0569b171-2a2b-476e-a596-5bdfb45a1327",
                "2a14b52e-d459-4c92-be11-5d86b898f6b6"
            ],
            "is_mature": false,
            "_mature": false
        }
    ],
    "pagination": {
        "cursor": "eyJiIjp7IkN1cnNvciI6ImV5SnpJam96TlRVMk16QXVOalV3TmpJd09EWTNMQ0prSWpwbVlXeHpaU3dpZENJNmRISjFaWDA9In0sImEiOnsiQ3Vyc29yIjoiZXlKeklqb3hPRGMyTmk0eU5USTRPRE14TXprME1pd2laQ0k2Wm1Gc2MyVXNJblFpT25SeWRXVjkifX0"
    }
};