import { MdOutlineDashboard, MdManageAccounts } from "react-icons/md";
import { RiEarthFill } from "react-icons/ri";

export const navigationsConfig = [
    {
        title: "Dashboard",
        icon: <MdOutlineDashboard />,
        path: "/admin/dashboard"
    },
    {
        title: "Countries",
        icon: <RiEarthFill />,
        path: "/admin/countries"
    },
    {
        title: "Accounts",  
        icon: <MdManageAccounts />,
        path: "/admin/accounts"
    },
];