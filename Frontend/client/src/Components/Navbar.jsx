import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-black h-16">
      <div className="text-cyan-50 ml-12 uppercase">
        <Link to="/">Logo</Link>
      </div>
      <div>
        <ul className="flex justify-center items-center text-cyan-50 mr-32 uppercase">
          {["home", "about", "post", "contact"].map((item) => (
            <li className="pr-8" key={`link-${item}`}>
              <Link to={`/${item}`}>{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
