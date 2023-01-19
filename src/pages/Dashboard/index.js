import { useAuthContext } from "../../context/userAuthContext";
import s from "./styles.module.scss";

function Dashboard () {
    const { addSubUser } = useAuthContext();

    return (
        <main className={s.dashboard}>
            <button onClick={() => {
                addSubUser({
                    firstName: "Gor",
                    lastName: "Soghoyan",
                    email: "soghoyan@gmail.com",
                    password: "02ipoewkoadk"
                })
            }}>
                add sub user
            </button>
        </main>
    );
}

export default Dashboard;