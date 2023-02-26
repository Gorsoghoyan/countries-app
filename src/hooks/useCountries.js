import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fs } from "../firebase";
import Swal from "sweetalert2";
import { 
  collection, getDocs, orderBy, query, 
  limit, startAfter, deleteDoc, doc, where
} from "firebase/firestore";
import { 
  selectInput, setLocation, changePlaceholder, changeValue
} from "../redux/slices/search/searchInputSlice";

const useCountries = () => {
  const [lastVisible, setLastVisible] = useState();
  const [countries, setCountries] = useState([]);
  const [dataLimit, setDataLimit] = useState(50);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);

  const [seeMore, setSeeMore] = useState(true);

  const { value } = useSelector(selectInput);
  const countriesRef = collection(fs, "countries");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getCountries();
    dispatch(changePlaceholder("Search by country..."));
    dispatch(setLocation("countries"));

    return () => {
      dispatch(changePlaceholder("Search..."));
      dispatch(setLocation(null));
      dispatch(changeValue(""));
    }
  }, []);

  useEffect(() => {
    if (value) {
      getSearchingCountries(value);
    }
  }, [value]);

  async function getCountries() {
    setLoading(true);
    try {
      const countriesQuery = query(countriesRef, orderBy("name.common"), limit(dataLimit));

      const documentSnapshots = await getDocs(countriesQuery);
      const lastVisibleCountry = documentSnapshots.docs[documentSnapshots.docs.length - 1];

      const countries = documentSnapshots.docs.map(doc => ({ ...doc.data(), id: doc.id }));

      setLastVisible(lastVisibleCountry);
      setCountries(countries);
      setDataLimit(70);

      setError("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }

  async function getMoreCountries() {
    setBtnLoading(true);
    try {
      const countriesQuery = query(
        countriesRef,
        orderBy("name.common"),
        startAfter(lastVisible),
        limit(dataLimit)
      );

      const documentSnapshots = await getDocs(countriesQuery);

      if (documentSnapshots.empty) {
        setSeeMore(false);
        setBtnLoading(false);
        return;
      }

      const lastVisibleCountry = documentSnapshots.docs[documentSnapshots.docs.length - 1];

      const countries = documentSnapshots.docs.map(doc => ({ ...doc.data(), id: doc.id }));

      setLastVisible(lastVisibleCountry);
      setCountries(prev => [...prev, ...countries]);

      setError("");
      setBtnLoading(false);
    } catch (error) {
      setBtnLoading(false);
      setError(error.message);
    }
  }

  async function getSearchingCountries() {
    setLoading(true);
    try {
      const countriesQuery = query(
        countriesRef, 
        where("region", "==", value),
        orderBy("name.common"), 
      );

      const documentSnapshots = await getDocs(countriesQuery);
      const countries = documentSnapshots.docs.map(doc => ({ ...doc.data(), id: doc.id }));

      setCountries(countries);

      setError("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }

  const deleteApi = async (id) => {
    setLoading(true);
    try {
      const userDoc = doc(fs, "countries", id);
      await deleteDoc(userDoc);
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
      getCountries();
      setLoading(false);
      setError("");
    } catch (error) {
      console.log(error)
      setLoading(false);
      setError(error.message);
    }
  };

  const deleteCountry = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#00acac",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        deleteApi(id);
      }
    });
  };

  const handleEditCountry = (id) => {
    navigate(`/edit/country/${id}`);
  };

  return {
    error,
    loading,
    seeMore,
    countries,
    btnLoading,
    handleEditCountry,
    deleteCountry,
    getMoreCountries
  };
};

export default useCountries;