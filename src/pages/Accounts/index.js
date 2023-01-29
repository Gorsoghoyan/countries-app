import PageTopPart from "../../components/PageTopPart";
import s from "./styles.module.scss";

function Accounts () {

    return (
        <section className={s.accounts}>
            <PageTopPart 
                title="Accounts"
                button={true}
                btnText={"Add user"}
                path={""}
            />
        </section>
    );
}

export default Accounts;