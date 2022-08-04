import {Typography} from "@mui/material";
import * as React from "react";

interface SideBarFilterListTypographyBoxesProps {
    display_name: string
}
export default function SideBarFilterListTypographyBoxes(props: SideBarFilterListTypographyBoxesProps) {
    return (
        <Typography m={0.8}
                    style={{display: 'inline-block'}}
                    variant={"body1"}>
            {props.display_name}
        </Typography>
    );
}