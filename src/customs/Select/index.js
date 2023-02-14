
const Select = (props) => {
  return (
    <select {...props}>
      {props.children}
    </select>
  );
};

export default Select;