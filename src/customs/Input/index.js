import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return <input ref={ref} {...props.attr} className={props.className} />;
});

export default Input;
