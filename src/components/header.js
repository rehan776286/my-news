import LanguageToggleButton from "./toggleBT";

// import iconlogo from "../../public/iconlogo.png";
const Header = () => {
  return (
    <header className="w-full bg-gray-800 ">
      <div className="flex justify-between items-center py-1 px-3">
        <img
          src="/head.png"
          alt="trendmode news"
          className="w-30 md:w-40 h-auto object-contain select-none pointer-events-none"
        />
        {/* <Image
          src="https://res.cloudinary.com/dq6s0fy8k/image/upload/v1753525870/head_fdhhzg.png"
          alt="Share on WhatsApp"
          width={200}
          height={160}
          className="w-30 md:w-40 h-auto object-contain select-none pointer-events-none"
          priority
        /> */}

        <LanguageToggleButton />
      </div>
      {/* <Navbar /> */}
    </header>
  );
};

export default Header;
