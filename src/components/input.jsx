import React from "react";
import { useState } from "react";

// Компонент для двустороннего связывания. Изучил useState
const Input = () => {
    const [value, setValue] = useState("");

    return (
        <>
            <h1>{value}</h1>
            <input
                type="text"
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
        </>
    );
};

export default Input;
