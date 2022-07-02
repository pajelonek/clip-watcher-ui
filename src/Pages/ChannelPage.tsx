import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/Footer";
import ContentSection from "../Components/MainPage/ContentSection";

export default function ChannelPage() {

    return (
        <React.Fragment>
            <CssBaseline/>
            {/* Header unit */}
            <Header/>
            {/* Trending Box unit */}
            <div><p>THIS IS CHANNEL PANEL OKEY?</p></div>
            <ContentSection/>
            {/* Footer */}
            <Footer/>
        </React.Fragment>
    );
}