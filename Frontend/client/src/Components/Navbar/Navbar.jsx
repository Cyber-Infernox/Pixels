import { Link } from "react-router-dom";

import { useAuthContext } from "../../Hooks/useAuthContext";
import { useLogout } from "../../Hooks/useLogout";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="flex justify-between items-center bg-black h-16 sticky top-0">
      <div className="text-cyan-50 ml-12 uppercase">
        <Link to="/">Logo</Link>
      </div>
      <div>
        <ul className="flex justify-center items-center text-cyan-50 mr-32 uppercase">
          {["home", "about", "post", "contact"].map((item) => (
            <li className="pr-8" key={`link-${item}`}>
              {user && <Link to={`/${item}`}>{item}</Link>}
            </li>
          ))}
          {!user && (
            <div className="pr-8 cursor-pointer">
              <Link to="/login">LOGIN</Link>
            </div>
          )}
          {!user && (
            <div className="pr-8 cursor-pointer">
              <Link to="/signup">SIGNUP</Link>
            </div>
          )}
          {user && (
            <div>
              <button onClick={handleLogout} className="pr-8 cursor-pointer">
                LOGOUT
              </button>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
