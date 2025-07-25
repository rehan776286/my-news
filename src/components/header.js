import LanguageToggleButton from "./toggleBT";

// import iconlogo from "../../public/iconlogo.png";
const Header = () => {
  return (
    <header className="w-full bg-gray-800 ">
      <div className="flex justify-between items-center py-1 px-3">
        <img
          src="/head.png"
          alt=""
          className="w-30 md:w-40 h-auto object-contain select-none pointer-events-none"
        />
        <LanguageToggleButton />
      </div>
      {/* <Navbar /> */}
    </header>
  );
};

export default Header;
