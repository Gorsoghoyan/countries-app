import PageTopPart from "../../components/PageTopPart";
import s from "./styles.module.scss";

function Countries () {

    return (
        <div className={s.countries}>
            <PageTopPart 
                title="Countries"
                button={true}
                btnText={"Add country"}
                path={""}
            />
        </div>
    );
}

export default Countries;