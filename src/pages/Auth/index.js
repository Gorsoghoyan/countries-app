import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import FormInput from "../../components/FormInput";
import Logo from "../../components/Logo";
import Spinner from "../../components/Spinner";
import Button from "../../customs/Button";
import useAuth from "../../hooks/useAuth";
import s from "./styles.module.scss";

function Auth ({ type }) {
    const { target, loading, error, handleUserData, handleSubmit } = useAuth(type);

    return (
        <main className={s.auth}>
            <div className={s.leftPart} style={target.styles}>
                <div className={s.textBlock}>
                    <h4><b>Countries</b> Admin App</h4>
                    <p>{target.text}</p>
                </div>
            </div>
            <form className={s.rightPart} onSubmit={handleSubmit}>
                {type === "login" ? 
                    <div className={s.loginFlex}>
                        <div className={s.left}>    
                            <Logo svgFontSize={32} nameFontSize={28} />
                            <p>Sign in to Countries app admin</p>
                        </div>
                        <FiLogIn className={s.loginIcon} />
                    </div> :
                    <>
                    <h2 className={s.registerTitle}>Sign Up</h2>
                    <p className={s.registerText}>Create your Countries Admin Account. It's free and always will be.</p>
                    </>
                }
                {error && <p className={s.error}>{error}</p>}
                {target.inputsConfig.map(item =>
                    <FormInput 
                        key={item.id}
                        id={item.id}
                        type={item.type}
                        name={item.name}
                        plc={item.placeholder}
                        autoFocus={item.autoFocus}
                        onChange={e => handleUserData(e)}
                    />    
                )}
                <Button className={s[target.btnClassName]} type="submit" disabled={loading}>
                    {loading ? <Spinner 
                        size={18}
                        backColor={"#e3e3e3"}
                        frontColor="#fff"
                        thickness={"3px"}
                    /> : target.btnText}
                </Button>
                {type === "login" && 
                    <Link to="/forgot-password" className={s.forgot}>Forgot password?</Link>
                }
                {target.linkText} <hr />
                <p className={s.footText}>© Countries Admin All Right Reserved 2023</p>
            </form>
        </main>
    );
}

export default Auth;