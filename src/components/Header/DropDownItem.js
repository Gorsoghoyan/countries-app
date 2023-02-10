import { Link } from "react-router-dom";

function DropDownItem({ title, path, onClick }) {
  return (
    <Link onClick={onClick} to={path}>
      {title}
    </Link>
  );
}

export default DropDownItem;
