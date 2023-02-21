import Spinner from "../Spinner";
import Input from "../../customs/Input";
import AutocompleteItem from "./AutocompleteItem";
import useAutoComplete from "../../hooks/useAutocomplete";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import s from "./styles.module.scss";
import c from "classnames";

function Autocomplete({ className, placeholder, options, getOptionLabel, onChange }) {
  const {
    open,
    find,
    value,
    clickRef,
    isPending,
    filteredOptions,
    openDropDown,
    handleChange,
    handleItemClick,
  } = useAutoComplete(options, getOptionLabel, onChange);

  return (
    <div
      ref={clickRef}
      className={c(s.autocomplete, className)}
      onClick={openDropDown}
    >
      <Input
        attr={{
          type: "text",
          value,
          placeholder,
          onChange: (e) => handleChange(e.target.value)
        }}
      />
      <div className={s.icons}>
        <AiOutlineClose
          className={c(s.cross, { [s.active]: find })}
          onClick={() => handleChange("")}
        />
        <IoMdArrowDropdown className={c(s.arrow, { [s.rotate]: open })} />
      </div>
      <div className={c(s.dropDown, { [s.open]: open })}>
        {isPending && (
          <Spinner
            className={s.inputSpinner}
            size={"20px"}
            backColor="#00acac"
            frontColor="transparent"
            thickness={"2px"}
          />
        )}
        {Boolean(filteredOptions.length) && (
          filteredOptions.map((option) => (
            <AutocompleteItem
              key={option.id}
              className={s.item}
              background={find ? "#1976d21f" : null}
              optionName={getOptionLabel(option)}
              onClick={(e) => handleItemClick(e, option)}
            />
          )
        ))}
        {Boolean(!filteredOptions.length) && (
          <AutocompleteItem
            className={s.item}
            optionName={"No options"}
            background={"#c7c7c7"}
            cursor={"auto"}
          />
        )}
      </div>
    </div>
  );
}

export default Autocomplete;