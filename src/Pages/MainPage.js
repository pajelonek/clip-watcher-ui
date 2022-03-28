import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/Footer";
import TrendingBox from "../Components/MainPage/TrendingSection/TrendingBox";
import ContentSection from "../Components/MainPage/ContentSection";

export default function MainPage() {

    return (
        <React.Fragment>
            <CssBaseline/>
            {/* Header unit */}
            <Header/>
            {/* Trending Box unit */}
            <TrendingBox/>
            {/* Clips Container unit */}
            <ContentSection/>
            {/* Footer */}
            <Footer/>
        </React.Fragment>
    );
}