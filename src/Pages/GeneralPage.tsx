import * as React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import MainPage from "./MainPage";
import ChannelPage from "./ChannelPage";
import NotFoundPage from "./NotFoundPage";

export default function GeneralPage() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/clip-watcher-ui*" element={<MainPage/>}/>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/channel" element={<ChannelPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}