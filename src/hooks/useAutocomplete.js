import { useEffect, useState, useTransition } from "react";
import useClickOutside from "./useClickOutside";

const useAutoComplete = (options, getOptionLabel, onChange) => {
  const [open, setOpen] = useState(false);
  const [find, setFind] = useState(false);
  const [value, setValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [isPending, startTransition] = useTransition()
  const clickRef = useClickOutside(closeDropDown);

  useEffect(() => {
    if (!options.length && !value) return;
    setFilteredOptions(options.filter((option) => (
      getOptionLabel(option).toLowerCase().includes(value.toLowerCase())
    )));
  }, [value, options, getOptionLabel]);

  function closeDropDown() {
    setOpen(false);
  }

  const openDropDown = () => {
    setOpen(true);
  };

  const handleChange = (e) => {
    if (find && !e.target.value) {
      onChange();
      setFind(false);  
    }
    startTransition(() => {
      setValue(e.target.value);
    });
  };

  const handleItemClick = (e, option) => {
    e.stopPropagation();
    setOpen(false);
    if (find) return;
    setFind(true);
    startTransition(() => {
      setValue(getOptionLabel(option));
    });
    onChange(e, option);
  }

  return {
    open,
    find,
    value,
    clickRef,
    isPending,
    filteredOptions,
    openDropDown,
    handleChange,
    handleItemClick
  };
};

export default useAutoComplete;