import Button from "../../customs/Button";
import FormInput from "../FormInput";
import { inputsConfig } from "./inputsConfig";
import s from "./styles.module.scss";

function Register ({ setUserData }) {

    return (
        <>
            <h2 className={s.title}>Sign Up</h2>
            <p className={s.text}>Create your Countries Admin Account. It's free and always will be.</p>
            {
                inputsConfig.map(item => 
                    <FormInput 
                        key={item.id}
                        id={item.id}
                        type={item.type}
                        name={item.name}
                        plc={item.placeholder}
                        onChange={(e) => setUserData(e)}
                    />
                )
            }
            <Button className={s.btn} type="submit">Sign up</Button>
        </>
    );
}

export default Register;