import 'react-toastify/dist/ReactToastify.css';
import GoBack from "../../components/GoBack";
import Spinner from "../../components/Spinner";
import Button from "../../customs/Button";
import Input from "../../customs/Input";
import usePassword from "../../hooks/usePassword";
import s from "./styles.module.scss";

function Password ({ type }) {
    const { target, value, loading, handleSetValue, handleSubmit } = usePassword(type);

    return (
        <main className={s.container}>
            <h2>{target.title}</h2>
            <form onSubmit={handleSubmit}> 
                <p>{target.formTitle}</p>
                <Input 
                    attr={{
                        type: target.inputType,
                        required: true,
                        autoFocus: true,
                        value,
                        onChange: e => handleSetValue(e.target.value)
                    }}
                />
                <Button disabled={loading}>
                    {
                        loading ? 
                        <Spinner 
                            size={18}
                            backColor={"#e3e3e3"}
                            frontColor="#fff"
                            thickness={"3px"}
                        /> : target.btnText
                    }
                </Button>
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