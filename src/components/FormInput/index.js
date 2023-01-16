import Input from "../../customs/Input";
import s from "./styles.module.scss";

function FormInput ({ plc, type, onChange, id, name }) {

    return (
        <div className={s.wrapper}>
            <Input 
                type="formInput"
                attr={{ type, onChange, id, name, required: true }}
            />
            <label htmlFor={id}>{plc}</label>
        </div>
    );
}

export default FormInput;