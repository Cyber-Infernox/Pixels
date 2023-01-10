const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-black h-16">
      <div className="text-cyan-50 ml-12">Logo</div>
      <div>
        <ul className="flex justify-center items-center text-cyan-50 mr-32">
          {["Home", "About", "Contact"].map((item) => (
            <li className="pr-8" key={`link-${item}`}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
