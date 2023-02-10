import { ToastContainer } from "react-toastify";

function Toastify() {
  return (
    <ToastContainer
      position="top-center"
      autoClose={2000}
      limit={1}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
}

export default Toastify;
