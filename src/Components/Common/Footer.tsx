import Container from "@mui/material/Container";
import Copyright from "./Copyright";
import * as React from "react";

export default function Footer(){

    return (
        <Container maxWidth="md" component="footer"
            sx={{borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                mt: 3, py: [3, 6]}}>
            <Copyright id={"footer-Copyright"} data-testid="footer-Copyright" sx={{mt: 2}}/>
        </Container>
    );
}