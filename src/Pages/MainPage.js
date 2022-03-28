import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/Footer";
import TrendingBox from "../Components/MainPage/TrendingSection/TrendingBox";
import ContentSection from "../Components/MainPage/ContentSection";

export default function MainPage() {

    return (
        <React.Fragment>
            <GlobalStyles styles={{ul: {margin: 0, padding: 0, listStyle: 'none'}}}/>
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