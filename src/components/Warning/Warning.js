import React from "react";
import "./Warning.css";

export const Warning = ({text, position}) => {
    return (
        <div
            className={"warning-div"}
        >
            {text}
        </div>
    )
}