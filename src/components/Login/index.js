import { FiLogIn } from "react-icons/fi";
import { inputsConfig } from "./inputsConfig";
import Button from "../../customs/Button";
import FormInput from "../FormInput";
import Logo from "../Logo";
import s from "./styles.module.scss";

function Login ({ setUserData }) {

    return (
        <>
            <div className={s.flex}>
                <div className={s.left}>    
                    <Logo svgFontSize={32} nameFontSize={28} />
                    <p>Sign in to Countries app admin</p>
                </div>
                <FiLogIn className={s.loginIcon} />
            </div>
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
            <Button className={s.btn} type="submit">Sign in</Button>
            <p className={s.forgot}>Forgot password?</p>
        </>
    );
}

export default Login;