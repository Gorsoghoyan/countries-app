import loginImage from "../../images/loginImage.jpg";
import registerImage from "../../images/registerImage.jpg";
import { Link } from "react-router-dom";
import s from "./styles.module.scss";

export const register = {
    text: "As a Countries Admin app administrator, you use the Countries Admin console to manage your organization’s account, such as add new users, manage security settings, and turn on the services you want your team to access.",
    image: registerImage,
    linkText: <p className={s.linkText}>Already a member? Click <Link>here</Link> to login.</p>,
};

export const login = {
    text: "Download the Countries Admin app for iPhone®, iPad®, and Android™. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: loginImage,
    linkText: <p className={s.linkText}>Not a member yet? Click <Link>here</Link> to register.</p>,
};