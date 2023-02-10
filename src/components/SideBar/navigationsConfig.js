import { MdOutlineDashboard, MdManageAccounts } from "react-icons/md";
import { RiEarthFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

export const navigationsConfig = [
  {
    title: "Dashboard",
    icon: <MdOutlineDashboard />,
    path: "/admin/dashboard",
  },
  {
    title: "Countries",
    icon: <RiEarthFill />,
    path: "/admin/countries",
  },
  {
    type: "accounts",
    title: "Accounts",
    icon: <MdManageAccounts />,
    path: "/admin/accounts",
  },
  {
    title: "Profile",
    icon: <CgProfile />,
    path: "/admin/profile",
  },
];
