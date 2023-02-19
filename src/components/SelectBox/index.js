import useSelectBox from "../../hooks/useSelectBox";
import Input from "../../customs/Input";
import OptionItem from "./OptionItem";
import s from "./styles.module.scss";
import c from "classnames";

function SelectBox({ options, onRowsPerPageChange }) {
  const { 
    value, 
    clickRef,
    openOptions, 
    handleClick, 
    onOpenOptions 
  } = useSelectBox(options[0], onRowsPerPageChange);

  return (
    <div className={s.container} onClick={onOpenOptions}>
      <Input attr={{ value, readOnly: true }} />
      <div 
        ref={clickRef} 
        className={c(s.options, { [s.open]: openOptions })}
      > 
        {options?.map((option, index) => (
          <OptionItem 
            key={index}
            optionName={option}
            background={option === value && "#d3d3ff"}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}

export default SelectBox;