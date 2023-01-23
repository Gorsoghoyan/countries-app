import GoBack from "../../components/GoBack";
import Button from "../../customs/Button";
import Input from "../../customs/Input";
import usePassword from "../../hooks/usePassword";
import s from "./styles.module.scss";

function Password ({ type }) {
    const { target } = usePassword(type);
    
    return (
        <main className={s.container}>
            <h2>{target.title}</h2>
            <form> 
                <p>{target.formTitle}</p>
                <Input 
                    type={target.inputType}     
                />
                <Button>{target.btnText}</Button>
            </form>
            <GoBack
                top={20}
                left={20}
                color={"black"}
                fontSize={30}
            />
        </main>
    );
}

export default Password;