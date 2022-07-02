import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from "../Components/Common/Footer";

export default function NotFoundPage() {
    return (
        <React.Fragment>
            <CssBaseline/>
            <div>
                <p>404 PAGE NOT FOUND</p>
            </div>
            {/* Footer */}
            <Footer/>
        </React.Fragment>
    );
}