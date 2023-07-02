import React from "react"; 
import "./TextForm.css";

export const TextForm = ({setValue, label}) => {
    const handleInput = (e) => {
        e.preventDefault();
        setValue(e.target.value);
    }

    return (
        <div className="text-form-container">
            <div className="label">{label}</div>
            <input 
                className="text-form-input"
                type="text"
                spellCheck={false}
                onChange={handleInput}
            />
        </div>
    );
}