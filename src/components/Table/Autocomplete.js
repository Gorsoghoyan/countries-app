import FormInput from "../FormInput";

function Autocomplete({ label }) {
  return (
    <div>
      <FormInput 
        type={"text"}
        plc={label}
        id={Math.random()}
        // onChange={}
      />
      <div>
        
      </div>
    </div>
  );
}

export default Autocomplete;