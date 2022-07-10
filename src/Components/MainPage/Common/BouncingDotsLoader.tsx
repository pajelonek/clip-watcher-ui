import React from "react";
import "./BouncingDotsLoader.css";

const BouncingDotsLoader = (props: any) => {
    return (
        <div id={"bouncingDotsElement"} className="bouncing-loader" {...props}>
            <div/>
            <div/>
            <div/>
        </div>
    );
};

export default BouncingDotsLoader;