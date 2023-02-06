import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { fs } from "../firebase";
import Swal from "sweetalert2";

const useAccountsList = () => {
    const [ page, setPage ] = useState(0);
    const [ rowsPerPage, setRowsPerPage ] = useState(5);
    const [ rows, setRows ] = useState([]);
    const empCollectionRef = collection(fs, "subUsers");    

    useEffect(() => {
        getUsers();   
    }, [ empCollectionRef ]);

    async function getUsers () {
        const data = await getDocs(empCollectionRef);
        setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
  
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const deleteApi = async (id) => {
        const userDoc = doc(fs, "products", id);
        await deleteDoc(userDoc);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        getUsers();
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
    
    return {
        page,
        rows,
        rowsPerPage,
        deleteUser,
        handleChangePage,
        handleChangeRowsPerPage
    };
};

export default useAccountsList;