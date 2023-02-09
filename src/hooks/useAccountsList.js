import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { fs } from "../firebase";
import Swal from "sweetalert2";

const useAccountsList = () => {
    const [ page, setPage ] = useState(0);
    const [ rowsPerPage, setRowsPerPage ] = useState(5);
    const [ rows, setRows ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState("");
    const empCollectionRef = collection(fs, "subUsers");    

    useEffect(() => {
        getUsers();   
    }, []);

    async function getUsers () {
        setLoading(true);
        try {
            const data = await getDocs(empCollectionRef);
            if (!data.docs.length) throw new Error("There are no sub-users yet.");
            setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            setLoading(false);
            setError("");
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    };
  
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const deleteApi = async (id) => {
        setLoading(true);
        try {
            const userDoc = doc(fs, "subUsers", id);
            await deleteDoc(userDoc);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            getUsers();
            setLoading(false);
            setError("");
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    };

    const deleteUser = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.value) {
            deleteApi(id);
          }
        });
    };

    const filterData = (v) => {
        if (v) {
          setRows([v]);
        } else {
          getUsers();
        }
    };
    
    return {
        page,
        rows,
        rowsPerPage,
        loading,
        error,
        filterData,
        deleteUser,
        handleChangePage,
        handleChangeRowsPerPage
    };
};

export default useAccountsList;