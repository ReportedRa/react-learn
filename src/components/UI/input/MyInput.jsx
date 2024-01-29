import React from "react";
import classes from "./MyInput.module.css";

// UI компонент поля ввода
const MyInput = React.forwardRef((props, ref) => {
    return <input ref={ref} className={classes.input} {...props} />;
});

export default MyInput;
