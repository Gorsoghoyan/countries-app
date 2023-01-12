import { MdOutlineDashboard, MdManageAccounts } from "react-icons/md";
import { RiEarthFill } from "react-icons/ri";

export const navigationsConfig = [
    {
        title: "Dashboard",
        icon: <MdOutlineDashboard />,
        link: "/dashboard"
    },
    {
        title: "Countries",
        icon: <RiEarthFill />,
        link: "/countries"
    },
    {
        title: "Accounts",  
        icon: <MdManageAccounts />,
        link: "/accounts"
    },
];