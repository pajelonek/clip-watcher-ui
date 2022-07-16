import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Header from "../Layouts/Header/Header";
import Footer from "../Layouts/Footer/Footer";
import TrendingBox from "../Components/TrendingSection/TrendingBox";
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