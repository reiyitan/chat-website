import React from "react"; 
import "./TextEntry.css";

/**
 * The text entry box where the user types a message to be sent. 
 */
export const TextEntry = ({
    value, 
    setValue,
    messages, 
    setMessages, 
}) => {
    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        setMessages([...messages, value]);
        setValue("");
        e.target.value = "";
    }   

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    }

    return (    
        <textarea
            id="text-entry"
            className="box-shadow"
            placeholder="Send a message"
            spellCheck={false}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
        />
    );
}