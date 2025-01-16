import MenuBar from "@/Components/ShadCn/MenuBar/MenuBar";
import { Button } from "@/Components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#fcfcfc] shadow text-[#0b0b0b]">
      {/* Desktop Navbar */}
      <div className="hidden sm:flex justify-between items-center px-8 py-4">
        {/* Logo Section */}
        <div>
          <img
            src="/src/assets/download.png"
            alt="Logo"
            className="w-20 h-auto"
          />
        </div>

        {/* Navigation Menu */}
        <div className="flex space-x-8">
          <Link to="/" className="text-[#494949] px-4 py-2 font-bold">
            Home
          </Link>
          <Link to="#about" className="text-[#494949] px-4 py-2 font-bold">
            Pet Listing
          </Link>
          <Link to="#services" className="text-[#494949] px-4 py-2 font-bold">
            Donation Campaigns
          </Link>
        </div>

        {/* Buttons (Login/Signup) */}
        <div className="flex space-x-4">
          <Button className="bg-transparent py-2 px-4 rounded-lg text-[#0b0b0b] hover:text-white font-bold text-md transform transition-transform duration-300 hover:-translate-y-1">
            <Link to="/login">Login</Link>
          </Button>
          <Button className="bg-[#efefef] py-2 px-4 rounded-lg text-[#0b0b0b] shadow-custom-gray hover:bg-white font-bold text-md transform transition-transform duration-300 hover:-translate-y-1">
            <Link to="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="sm:hidden flex justify-between items-center px-6 py-4">
        {/* Logo Section */}
        <div>
          <img
            src="/src/assets/peticon.png"
            alt="Logo"
            className="w-12 h-auto"
          />
        </div>

        {/* Dropdown Button */}
        <MenuBar />
      </div>
    </div>
  );
};

export default Navbar;
