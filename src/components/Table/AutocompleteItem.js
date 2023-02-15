
function AutocompleteItem({ optionName, onClick, background, className }) {
  return <div className={className} style={{ background }} onClick={onClick}>{optionName}</div>;
}

export default AutocompleteItem;