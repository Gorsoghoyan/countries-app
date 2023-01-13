import s from "./styles.module.scss";
import { register, login } from "./authConfig";

function Auth ({ type }) {
    const target = type === "register";

    return (
        <div className={s.auth}>
            <div className={s.leftPart} style={target ? register.style : login.style}>
                <div>
                    <h2>Countries <span>Admin App</span></h2>
                    <p>{target ? register.text : login.text}</p>
                </div>
            </div>
            <div className={s.rightPart}>

            </div>
        </div>
    );
}

export default Auth;