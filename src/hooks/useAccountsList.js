import { collection, deleteDoc, doc, endBefore, getDoc, getDocs, limit, startAt, limitToLast, orderBy, query, startAfter } from "firebase/firestore";
import { useEffect, useState } from "react";
import { fs } from "../firebase";
import Swal from "sweetalert2";

const useAccountsList = () => {
  const [page, setPage] = useState(1);
  const [rows, setRows] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(2);
  const [lastVisible, setLastVisible] = useState(null);
  const subUsersCollection = collection(fs, "subUsers");

  useEffect(() => {
    // getUsers();
    console.log(lastVisible)
  }, []);

  // async function getUsers() {
  //   setLoading(true);
  //   try {
  //     let quer = null;
  //     if (lastVisible) {
  //       quer = query(empCollectionRef, orderBy("displayName"), startAfter(lastVisible), limit(2 * rowsPerPage));
  //     } else {
  //       quer = query(empCollectionRef, orderBy("email"), limit(2));
  //     }
  //     const documentSnapshots = await getDocs(quer);
  //     if (!documentSnapshots.docs.length) throw new Error("There are no sub-users yet.");
  //     setRows(documentSnapshots.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //     setLastVisible(documentSnapshots.docs[documentSnapshots.docs.length - 1]);
  //     setLoading(false);
  //     setError("");
  //   } catch (error) {
  //     setLoading(false);
  //     setError(error.message);
  //   }
  // }

  useEffect(() => {
    const getUsers = async () => {
      console.log(page)
      const start = page * rowsPerPage - rowsPerPage;
      const usersQuery = query(subUsersCollection, orderBy("email"), startAt(start), limit(rowsPerPage));
      const snapshot = await getDocs(usersQuery);
      const rows = snapshot.docs.map(doc => doc.data());
      const snapshotAllUsers = await getDocs(subUsersCollection);
      setRows(rows)
      console.log({ 
          dbItems: rows,
          totalItemCount: snapshotAllUsers.size
      })
    }
    getUsers();
  }, [page, rowsPerPage])


  const handleChangePage = (event, item, arrow) => {
    if (arrow === "next") {
      setPage(page + 1)
      // getUsers();
    } else {
      setPage(page - 1)
      // getUsers();
    }
    // }
    // if (arrow === 'next') {
    //   const fetchNextData = async () => {
    //     const quere = query(empCollectionRef, orderBy("email"), startAfter(item.email), limit(2))
    //     const documentSnapshots = await getDocs(quere);
    //     setRows(documentSnapshots.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //     setPage(page + 1)
    //   };
    //   fetchNextData();
    // } else {
    //   const fetchPrevData = async () => {
    //     const quere = query(empCollectionRef, orderBy("email"), endBefore(item.email), limitToLast(2))
    //     const documentSnapshots = await getDocs(quere);
    //     setRows(documentSnapshots.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //     setPage(page - 1)
    //   };
    //   fetchPrevData();
    // }
  };

  const handleChangeRowsPerPage = (newPerPage) => {
    setRowsPerPage(newPerPage);
    setPage(0);
  };

  const deleteApi = async (id) => {
    setLoading(true);
    try {
      const userDoc = doc(fs, "subUsers", id);
      await deleteDoc(userDoc);
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
      // getUsers();
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
      // getUsers();
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
    handleChangeRowsPerPage,
  };
};

export default useAccountsList;
