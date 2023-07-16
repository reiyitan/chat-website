import React from "react"; 
import "./TextForm.css";

/**
 * Component for getting input from a user. 
 * 
 * @param setValue - Setter function to update a state variable to the current value of the input element.
 * @param label - The label to display above the text input. 
 * @param type - Specifies input type. Either "text" or "password". 
 * @param showWarning - A state variable boolean. If set to true, the label will display a warning.
 */
export const TextForm = ({setValue, label, type, showWarning}) => {
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
                type={type}
                spellCheck={false}
                onChange={handleInput}
            />
        </div>
    );
}