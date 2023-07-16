import React from "react"; 
import "./TextForm.css";

/**
 * Component for getting input from a user. 
 * 
 * @param setValue - Setter function to update a state variable to the current value of the input element.
 * @param label - The label to display above the text input. 
 */
export const TextForm = ({setValue, label, showWarning}) => {
    const handleInput = (e) => {
        e.preventDefault();
        setValue(e.target.value);
    }

    return (
        <div className="text-form-container">
            <div className={showWarning ? "label warning" : "label"}>
                {label}{showWarning ? " - This field is required" : ""}
            </div>
            <input 
                className="text-form-input"
                type="text"
                spellCheck={false}
                onChange={handleInput}
            />
        </div>
    );
}