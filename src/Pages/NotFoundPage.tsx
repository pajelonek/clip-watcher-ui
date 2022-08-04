import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from "../Layouts/Footer/Footer";
import Header from "../Layouts/Header/Header";
import NotFoundComponent from "../Components/NotFound/NotFoundComponent";

export default function NotFoundPage() {
    return (
        <React.Fragment>
            <CssBaseline/>
            {/* Header unit */}
            <Header/>
            {/* NotFoundComponent unit */}
            <NotFoundComponent/>
            <Footer/>
        </React.Fragment>
    );
}