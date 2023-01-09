const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-black w-full h-40">
      <div className="text-cyan-50">Logo</div>
      <div>
        <ul className="flex justify-center items-center text-cyan-50">
          {["Home", "About", "Contact"].map((item) => (
            <li key={`link-${item}`}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
