import { Fragment } from "react";
import ComponentLoading from "../../components/ComponentLoading";
import Country from "../../components/Country";
import ErrorMessage from "../../components/ErrorMessage";
import PageTopPart from "../../components/PageTopPart";
import Button from "../../customs/Button";
import useCountries from "../../hooks/useCountries";
import s from "./styles.module.scss";

function Countries() {
  const {
    error,
    loading,
    seeMore,
    countries,
    btnLoading,
    handleEditCountry,
    deleteCountry,
    getMoreCountries
  } = useCountries();

  return (
    <div className={s.countries}>
      <PageTopPart
        title="Countries"
        button={true}
        btnText={"Add country"}
        path={"/add/country"}
        btnBackground={"rgb(45 53 60)"}
        btnBorder={"none"}
        btnPadding={"7px 20px "}
      />
      {loading ? (
        <ComponentLoading className={s.loading} />
      ) : error ? (
        <ErrorMessage
          fontSize={20}
          error={error}
          color={"#ffffff7e"}
          margin={"calc(23% + 0px) 0 0 0"}
        />
      ) : (
        <Fragment>
          <section className={s.gridContainer}>
            {Boolean(countries.length) && (
              countries.map(country => (
                <Country
                  key={country.id}
                  id={country.id}
                  region={country.region}
                  name={country.name.common}
                  flagURL={country.flags.png}
                  population={country.population}
                  capital={country.capital
                    ? country.capital[0]
                    : "Has no capital city"
                  }
                  deleteCountry={deleteCountry}
                  editCountry={handleEditCountry}
                />
              ))
            )}
          </section>
          {btnLoading ? (
            <ComponentLoading className={s.btnLoading} />
          ) : (
            <Button
              className={s.getMore}
              disabled={!seeMore}
              onClick={getMoreCountries}
            >
              {seeMore ? "See more" : "You are up to date!"}
            </Button>
          )}
        </Fragment>
      )}
    </div>
  );
}

export default Countries;