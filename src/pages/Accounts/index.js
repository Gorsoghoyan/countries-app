import { Navigate } from "react-router-dom";
import AccountsList from "../../components/AccountsList";
import PageTopPart from "../../components/PageTopPart";
import useAccounts from "../../hooks/useAccounts";
import s from "./styles.module.scss";

function Accounts () {
    const { currentUser, subUsers } = useAccounts();

    if (currentUser && currentUser.permissions) {
        return <Navigate to="/notFound" />;
    }

    return (
        <div className={s.accounts}>
            <PageTopPart 
                title="Accounts"
                button={true}
                btnText={"Add user"}
                path={""}
            />
            <AccountsList />
        </div>
    );
}

export default Accounts;