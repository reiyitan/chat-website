import React from "react"; 
import "./Button.css";

/**
 * A custom button component.
 * 
 * @param onClick - Callback function to be passed to the button's onClick.
 * @param text - The text to display on the button. 
 */
export const Button = ({onClick, text}) => {
    return (
        <button
            className="button color-transition"
            onClick={onClick}
        >{text}</button>
    );
}