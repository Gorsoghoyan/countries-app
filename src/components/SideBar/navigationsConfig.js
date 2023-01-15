import { MdOutlineDashboard, MdManageAccounts } from "react-icons/md";
import { RiEarthFill } from "react-icons/ri";

export const navigationsConfig = [
    {
        title: "Dashboard",
        icon: <MdOutlineDashboard />,
        path: "/dashboard"
    },
    {
        title: "Countries",
        icon: <RiEarthFill />,
        path: "/countries"
    },
    {
        title: "Accounts",  
        icon: <MdManageAccounts />,
        path: "/accounts"
    },
];