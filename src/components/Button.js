import React from "react";
import { useState } from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ['btn--primary', 'btn--outline']
const SIZES = ['btn--medium', 'btn--large']

function Button({ children, type, onClick, buttonStyle, buttonSize, buttonState }) {
    const checkButtonStyles = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <div className="btn-mobile">
            <button
                className={`btn ${checkButtonStyles} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </div>
       
    )
}

export default Button;
