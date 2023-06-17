import React from "react"; 
import "./Message.css";

export const Message = ({text}) => {
    return (
        <div className="message">
            {text}
        </div>
    );
}