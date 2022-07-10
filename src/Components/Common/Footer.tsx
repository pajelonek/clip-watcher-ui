import Container from "@mui/material/Container";
import Copyright from "./Copyright";
import * as React from "react";

export default function Footer(props: any){

    return (
        <Container id={"footer-Container"} maxWidth="md" component="footer"
            sx={{borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                mt: 3, py: [3, 6]}} {...props}>
            <Copyright id={"footer-Copyright"} data-testid="footer-Copyright" sx={{mt: 2}}/>
        </Container>
    );
}