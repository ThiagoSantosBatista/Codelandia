import React from "react";
import { LabelStyle } from "./style";

const InputCheckboxForm = ({ label, name }) => {
    return (
        <LabelStyle>
            <input type="checkbox" name={name} />
            {label}
        </LabelStyle>
    );
};

export default InputCheckboxForm;
