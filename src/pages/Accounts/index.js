import { Navigate } from "react-router-dom";
import AccountsList from "../../components/AccountsList";
import AccountsList2 from "../../components/AccountsList/indexx";
import PageTopPart from "../../components/PageTopPart";
import useAccounts from "../../hooks/useAccounts";
import s from "./styles.module.scss";

function Accounts() {
  const { currentUser, subUsers } = useAccounts();

  if (currentUser && currentUser.permissions) {
    return <Navigate to="/notFound" />;
  }

  return (
    <div className={s.accounts}>
      <PageTopPart title="Accounts..." />
      <AccountsList />
      <AccountsList2 />
    </div>
  );
}

export default Accounts;
