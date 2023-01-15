import Login from "../../components/Login";
import useAuth from "../../hooks/useAuth";
import s from "./styles.module.scss";

function Auth ({ type }) {
    const { target } = useAuth(type);

    return (
        <main className={s.auth}>
            <div className={s.leftPart} style={{
                background: `url(${target.image})`,
                backgroundSize: "cover",
                backgroundPosition: "50%",
                backgroundRepeat: "no-repeat",
            }}>
                <div className={s.textBlock}>
                    <h4><b>Countries</b> Admin App</h4>
                    <p>{target.text}</p>
                </div>
            </div>
            <form className={s.rightPart}>
                <Login />
                {target.linkText} <hr />
                <p className={s.footText}>© Countries Admin All Right Reserved 2023</p>
            </form>
        </main>
    );
}

export default Auth;