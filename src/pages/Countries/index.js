import PageTopPart from "../../components/PageTopPart";
import useCountries from "../../hooks/useCountries";
import s from "./styles.module.scss";

function Countries() {
  const { } = useCountries();

  return (
    <div className={s.countries}>
      <PageTopPart
        title="Countries..."
        button={true}
        btnText={"Add country"}
        path={""}
      />
      
    </div>
  );
}

export default Countries;
