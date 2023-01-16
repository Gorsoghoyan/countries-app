import { useEffect, useState } from "react";
import s from "./styles.module.scss";

function Error () {
    const [ pathname, setPathname ] = useState("");

    useEffect(() => {
        setPathname(document.location.pathname);
    }, []);

    return (
        <main className={s.error}>
            <h2>Not Found (404)</h2>
            <p>The requested URL {pathname && pathname} was not found on this server.</p>
            <hr/>
            <h4>Countries app</h4>
        </main>
    );
}

export default Error;