import PageTopPart from "../../components/PageTopPart";
import s from "./styles.module.scss";

function Dashboard () {

    return (
        <div className={s.dashboard}>
            <PageTopPart 
                title="Dashboard"
                button={false}
            />
        </div>
    );
}

export default Dashboard;