import { addCountry, addUser, editCountry, editUser } from "../pages/AddAndEdit/pageConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { auth, fs } from "../firebase";
import useUserContext from "./useUserContext";

const useAddAndEdit = (type) => {
  let target = null;
  switch (type) {
    case "addUser" : target = addUser; break;
    case "editUser" : target = editUser; break;
    case "addCountry" : target = addCountry; break;
    case "editCountry" : target = editCountry; break;
    default : break;      
  }

  const [data, setData] = useState(target.initialData);
  const [error, setError] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [perc, setPerc] = useState(null);
  const [loading, setLoading] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);

  const { userId, countryId } = useParams();
  const { uploadFile } = useUserContext();

  useEffect(() => {
    countryId && getData(countryId, "countries");
    userId && getData(userId, "subUsers");
  }, [userId, countryId]);  

  async function getData(id, collection) {
    setLoading(true);
    try {
      const docSnap = await getDoc(doc(fs, collection, id));
      if (docSnap.exists()) {
        setData(docSnap.data());
      }
      setError("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }

  async function addUserApi(data) {
    setBtnLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await setDoc(doc(fs, "subUsers", userCredential.user.uid), {
        ...data,
        createdAt: serverTimestamp(),
      });
      setError("");
      setBtnLoading(false);
    } catch (error) {
      setBtnLoading(false);
      setError(error.message);
    }
  };
  
  async function editUserApi(data) {
    setBtnLoading(true);
    try {
      if (data.password.length < 6) {
        throw Error("password must contain 6 or more characters");
      }
      await updateDoc(doc(fs, "subUsers", userId), {
        ...data,
        photoURL,
      });
      setError("");
      setBtnLoading(false);
    } catch (error) {
      setBtnLoading(false);
      setError(error.message);
    }
  };

  async function addCountryApi(data) {
    setBtnLoading(true);
    try {
      await setDoc(doc(fs, "countries"), {
        ...data,
        isChecked: false
      });
      setError("");
      setBtnLoading(false);
    } catch (error) {
      setBtnLoading(false);
      setError(error.message);
    }
  };

  async function editCountryApi(data) {
    setBtnLoading(true);
    try {
      
      setError("");
      setBtnLoading(false);
    } catch (error) {
      setBtnLoading(false);
      setError(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    switch (type) {
      case "addUser" : addUserApi(data); break;
      case "editUser" : editUserApi(data); break;
      case "addCountry" : addCountryApi(data); break;
      case "editCountry" : editCountryApi(data); break;
      default : break;      
    }
  };

  const handleFileChange = (file) => {
    if (file) {
      uploadFile({
        file,
        setPerc,
        setError,
        setPhotoURL
      })
    }
  };  

  const handleInputChange = (e, special) => {
    const { name, value } = e.target;

    if (special === "countryName") {
      setData({ ...data, name: { ...data.name, common: value } });
      return;
    }
    setData({ ...data, [name]: value });
  };

  return {
    data,
    perc,
    error,
    target,
    loading,
    photoURL,
    btnLoading,
    handleSubmit,
    handleFileChange,
    handleInputChange,
  };
};

export default useAddAndEdit;