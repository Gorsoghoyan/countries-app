import { useEffect } from "react";

const useScrollHandler = (callback) => {

  useEffect(() => {
    const handleScroll = (e) => {
      callback(e);
    };

    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  });

};

export default useScrollHandler;
