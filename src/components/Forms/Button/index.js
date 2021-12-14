import React from "react";
import "./style.scss"

const Button = ({ children, ...otherProps}) => {
    return (
        <button className="btn btn-dark" {...otherProps}>
            {children}
        </button>
    )
}

export default Button