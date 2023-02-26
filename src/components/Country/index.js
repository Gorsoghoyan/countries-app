import GridItem from "../GridItem";
import { MdEdit } from "react-icons/md";
import { BiSelectMultiple } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import s from "./styles.module.scss";

function Country({
  id,
  name,
  region,
  flagURL,
  capital,
  population,
  deleteCountry,
  editCountry,
}) {

  return (
    <GridItem className={s.country}>
      <div
        className={s.countryBg}
        style={{
          background: `url(${flagURL})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}
      >
        <div className={s.bgEffect}></div>
        <div className={s.actions}>
          <BiSelectMultiple />
          <MdEdit onClick={() => editCountry(id)} />
          <AiFillDelete onClick={() => deleteCountry(id)} />
        </div>
      </div>
      <div className={s.countryInfo}>
        <h2>{name}</h2>
        <p>Population:<span>
          {population.toLocaleString("en-US")}
        </span></p>
        <p>Region:<span>{region}</span></p>
        <p>Capital:<span>{capital}</span></p>
      </div>
      <div className={s.countryId}>#{id}</div>
    </GridItem>
  );
}

export default Country;