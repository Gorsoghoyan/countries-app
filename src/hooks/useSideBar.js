import { useState } from "react";

const useSideBar = () => {
    const [ hovering, setHovering ] = useState(false);

    const handleMouseOut = () => {
        setHovering(false);
    };

    const handleMouseOver = () => {
        setHovering(true);
    };

    return {
        hovering,
        handleMouseOut,
        handleMouseOver
    };
};

export default useSideBar;