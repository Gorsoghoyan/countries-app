import useUserContext from "../../hooks/useUserContext";
import s from "./styles.module.scss";

function Dashboard () {
    const { addSubUser } = useUserContext();

    return (
        <main className={s.dashboard}>
            <button onClick={() => {
                addSubUser({
                    firstName: "asdasdd",
                    lastName: "asdasda",
                    email: "gggggg@gmailsdf.com",
                    password: "dasdasd"
                })
            }}>
                add sub user
            </button>
        </main>
    );
}

export default Dashboard;