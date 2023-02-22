import { useEffect, useState, useTransition } from "react";
import useClickOutside from "./useClickOutside";
import useScrollHandler from "./useScrollHandler";

const useAutoComplete = (options, getOptionLabel, onChange, handleSearchedUser, searchedUser) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [isPending, startTransition] = useTransition()
  const [filteredOptions, setFilteredOptions] = useState([]);
  const clickRef = useClickOutside(closeDropDown);
  useScrollHandler(closeDropDown);

  useEffect(() => {
    if (!options.length && !value) return;
    setFilteredOptions(options.filter((option) => (
      getOptionLabel(option).toLowerCase().includes(value.toLowerCase())
    )));
  }, [value, options, getOptionLabel]);

  useEffect(() => {
    if (!searchedUser) {
      setValue("");
    };
  }, [searchedUser]);

  function closeDropDown() {
    setOpen(false);
  }

  const openDropDown = () => {
    setOpen(true);
  };

  const handleChange = (value) => {
    if (searchedUser && !value) {
      onChange();
      handleSearchedUser(false);  
    }
    startTransition(() => {
      setValue(value);
    });
  };

  const handleItemClick = (e, option) => {
    e.stopPropagation();
    setOpen(false);
    if (searchedUser) return;
    handleSearchedUser(true);
    startTransition(() => {
      setValue(getOptionLabel(option));
    });
    onChange(e, option);
  }

  return {
    open,
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