import {Link} from "react-router-dom";
import '../style.css';

const Navbar = () => {
  return (
    <div className="navbar">
        <Link to={"/"}><p>Home</p></Link>
        <Link to={"/menu"}><p>Menu</p></Link>
    </div>
  );
};

export default Navbar;
