import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/Footer";
import ContentSection from "../Components/MainPage/ContentSection";
import ChannelInformationPage from "../Components/MainPage/Channel/ChannelInformationPage";

export default function ChannelPage() {

    return (
        <React.Fragment>
            <CssBaseline/>
            {/* Header unit */}
            <Header/>
            {/* Channel Information unit */}
            <ChannelInformationPage/>
            {/* Clips Container unit */}
            <ContentSection/>
            {/* Footer */}
            <Footer/>
        </React.Fragment>
    );
}