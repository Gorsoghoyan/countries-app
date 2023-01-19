import { useEffect, useState } from "react";

const useGoTopArrow = () => {
    const [ active, setActive ] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!active && window.pageYOffset > 600) {
                setActive(true);
            } else if (active && window.pageYOffset <= 600) {
                setActive(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    });

    const handleClick = () => { 
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return {
        active,
        handleClick
    };
};

export default useGoTopArrow;