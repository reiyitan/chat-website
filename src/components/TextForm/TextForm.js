import React from "react"; 
import "./TextForm.css";

/**
 * Component for getting input from a user. 
 * 
 * @param setValue - Setter function to update a state variable to the current value of the input element.
 * @param label - The label to display above the text input. 
 * @param type - Specifies input type. Either "text" or "password". 
 * @param warning - A state variable. If "default" it will show the default warning, else it will show the value of warning.
 */
export const TextForm = ({setValue, label, type, warning}) => {
    const handleInput = (e) => {
        e.preventDefault();
        setValue(e.target.value);
    }

    return (
        <div className="text-form-container">
            <div className={warning ? "label warning" : "label"}>
                {label}
                {warning === "default" 
                    ? " - This field is required" 
                    : warning !== ""
                        ? ` - ${warning}`
                        : ""
                }
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