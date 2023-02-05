import { createContext, useState } from "react";

export const CountriesContext = createContext({});

const CountriesContextProvider = ({ children }) => {
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState("");

    return <CountriesContext.Provider value={{
        error,
        loading,
    }}>
        {children}
    </CountriesContext.Provider>
};

export default CountriesContextProvider;