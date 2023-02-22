import { useEffect, useState } from "react";
import { get, limitToFirst, query, ref, startAfter, startAt } from "firebase/database";
import { db } from "../firebase"

const useCountries = () => {
  const [lastVisible, setLastVisible] = useState(null);
  const [countries, setCountries] = useState([]);
  const [limit, setLimit] = useState(25);
  const [start, setStart] = useState(1);
  const countriesRef = ref(db, "/countries");

  useEffect(() => {
    console.log(countries)
  }, [countries]);
  
  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries () {
    const countriesQuery = query(countriesRef, startAt(start), limitToFirst(limit));

    const countries = [];

    const documentSnapshots = await get(countriesQuery);

    documentSnapshots.forEach(country => {
      countries.push(country.val());
    });

    setStart(prev => prev + start);
    setLimit(50);
    setCountries(prev => [ ...prev, ...countries ]);
  };













  async function getNextCountries() {
    const countriesQuery = query(countriesRef, startAfter(lastVisible), limitToFirst(25));

    const countries = [];

    const documentSnapshots = await get(countriesQuery);

    documentSnapshots.forEach(country => {
      countries.push(country.val());
    });

    const lastVisibleCountry = countries[countries.length - 1];

    setLastVisible(lastVisibleCountry);
    setCountries(prev => [...prev, ...countries]);
  }

  return {

  };
};

export default useCountries;