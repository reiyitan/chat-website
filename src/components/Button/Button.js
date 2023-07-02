import React from "react"; 
import "./Button.css";

export const Button = ({onClick, text}) => {
    return (
        <button
            className="button color-transition"
            onClick={onClick}
        >{text}</button>
    );
}