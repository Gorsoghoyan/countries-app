import { 
  doc, 
  limit, 
  query, 
  startAt, 
  getDocs, 
  orderBy, 
  deleteDoc, 
  endBefore, 
  collection, 
  startAfter,
  limitToLast, 
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { fs } from "../firebase";
import Swal from "sweetalert2";

const useAccountsList = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);
  const [rows, setRows] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [lastVisible, setLastVisible] = useState(null);
  const [firstVisible, setFirstVisible] = useState(null);
  const [allUsersSize, setAllUsersSize] = useState(null);
  const subUsersCollection = collection(fs, "subUsers");

  useEffect(() => {
    getUsers();
    setPage(1);
  }, [rowsPerPage]);

  const filterData = (v) => {
    if (v) {
      setFirstVisible(rows[0]);
      setRows([v]);
    } else {
      getUsers(firstVisible);
    }
  };

  async function getUsers(firstVisible) {
    setLoading(true);
    try {
      const first = firstVisible ? (
        query(
          subUsersCollection, 
          orderBy("email"), 
          startAt(firstVisible.email), 
          limit(rowsPerPage)
        )
      ) : (
        query(subUsersCollection, orderBy("email"), limit(rowsPerPage))
      );

      const documentSnapshots = await getDocs(first);

      if (firstVisible) {
        const firstVisibleUser = documentSnapshots.docs[0];
        setFirstVisible(firstVisibleUser);
      }
      const lastVisibleUser = documentSnapshots.docs[documentSnapshots.docs.length - 1];
  
      const firstUsers = documentSnapshots.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      const allUsers = await getDocs(subUsersCollection);
      const allUsersSize = allUsers.size;

      setLastVisible(lastVisibleUser);
      setAllUsersSize(allUsersSize);
      setRows(firstUsers);

      setError("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }

  async function getNextUsers() {
    setLoading(true);
    try {
      const next = query(
        subUsersCollection, 
        orderBy("email"), 
        startAfter(lastVisible),
        limit(rowsPerPage)
      );

      const documentSnapshots = await getDocs(next);

      const firstVisibleUser = documentSnapshots.docs[0];
      const lastVisibleUser = documentSnapshots.docs[documentSnapshots.docs.length - 1];

      const nextUsers = documentSnapshots.docs.map(doc => ({ ...doc.data(), id: doc.id }));

      setLastVisible(lastVisibleUser);
      setFirstVisible(firstVisibleUser);
      setRows(nextUsers);
      setPage(page + 1);

      setError("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }

  async function getPrevUsers() {
    setLoading(true);
    try {
      const prev = query(
        subUsersCollection, 
        orderBy("email"), 
        endBefore(firstVisible),
        limitToLast(rowsPerPage)
      );

      const documentSnapshots = await getDocs(prev);

      const firstVisibleUser = documentSnapshots.docs[0];
      const lastVisibleUser = documentSnapshots.docs[documentSnapshots.docs.length - 1];

      const prevUsers = documentSnapshots.docs.map(doc => ({ ...doc.data(), id: doc.id }));

      setFirstVisible(firstVisibleUser);
      setLastVisible(lastVisibleUser);
      setRows(prevUsers);
      setPage(page - 1);

      setError("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }

  const handleChangePage = (arrow) => {
    if (arrow === "next") {
      getNextUsers();
    } else {
      getPrevUsers();
    }
  };

  const handleChangeRowsPerPage = (newPerPage) => {
    setRowsPerPage(newPerPage);
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
      confirmButtonColor: "#00acac",
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
    error,
    loading,
    rowsPerPage,
    allUsersSize,
    filterData,
    deleteUser,
    handleChangePage,
    handleChangeRowsPerPage,
  };
};

export default useAccountsList;