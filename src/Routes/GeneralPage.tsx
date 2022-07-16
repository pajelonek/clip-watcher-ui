import * as React from 'react';
import {
    BrowserRouter,
    Routes,
    Route, Navigate,
} from "react-router-dom";
import MainPage from "../Pages/MainPage";
import ChannelPage from "../Pages/ChannelPage";
import NotFoundPage from "../Pages/NotFoundPage";
import {useSelector} from "react-redux";
import {selectIsSelected} from "../Services/Reducers/filterSlice";

export default function GeneralPage() {
    const isSelectedChannel: boolean = useSelector(selectIsSelected);

    return (
        <BrowserRouter basename={"/clip-watcher-ui"}>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="" element={<MainPage/>}/>
                <Route path="/channel"   element={isSelectedChannel ? <ChannelPage/> : <Navigate to={"/"}/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}