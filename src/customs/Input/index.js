import { forwardRef } from "react";
import s from "./styles.module.scss";

const Input = forwardRef((props, ref) => {

    return (
        <input 
            ref={ref}
            {...props.attr}
            className={s[props.type]}
        />
    );
});

export default Input;