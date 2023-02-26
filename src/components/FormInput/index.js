import Input from "../../customs/Input";
import s from "./styles.module.scss";

function FormInput({
  id,
  plc,
  type,
  name,
  onChange,
  autoFocus,
}) {
  return (
    <div className={s.wrapper}>
      <Input
        attr={{ 
          type, 
          onChange, 
          id, 
          name, 
          autoFocus, 
          required: true }}
      />
      <label htmlFor={id}>
        {plc}
      </label>
    </div>
  );
}

export default FormInput;
