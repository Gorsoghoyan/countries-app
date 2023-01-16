import { lazy, Suspense } from "react";
import useAuth from "../../hooks/useAuth";
import s from "./styles.module.scss";
const Login = lazy(() =>  import("../../components/Login"));
const Register = lazy(() =>  import("../../components/Register"));    

function Auth ({ type }) {
    const { target, handleUserData, handleSubmit } = useAuth(type);

    return (
        <main className={s.auth}>
            <div className={s.leftPart} style={target.styles}>
                <div className={s.textBlock}>
                    <h4><b>Countries</b> Admin App</h4>
                    <p>{target.text}</p>
                </div>
            </div>
            <form className={s.rightPart} onSubmit={handleSubmit}>
                <Suspense>
                    {
                        type === "login" 
                        ? <Login setUserData={handleUserData} /> 
                        : <Register setUserData={handleUserData} />
                    }
                </Suspense>
                {target.linkText} <hr />
                <p className={s.footText}>© Countries Admin All Right Reserved 2023</p>
            </form>
        </main>
    );
}

export default Auth;