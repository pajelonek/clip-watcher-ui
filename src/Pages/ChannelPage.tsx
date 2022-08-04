import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Header from "../Layouts/Header/Header";
import Footer from "../Layouts/Footer/Footer";
import ContentSection from "../Components/MainPage/ContentSection";
import ChannelInformationPage from "../Components/Channel/ChannelInformationPage";

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