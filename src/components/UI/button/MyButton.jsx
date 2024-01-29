import React from "react";
import classes from "./MyButton.module.css";

// UI компонент кнопки
const MyButton = ({ children, ...props }) => {
    return (
        <button {...props} className={classes.btn}>
            {children}
        </button>
    );
};

export default MyButton;
