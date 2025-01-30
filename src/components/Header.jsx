import { useState } from "react";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
import { toast } from "react-toastify";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const { open } = useAppKit()
  const { isConnected } = useAppKitAccount()

  const handleConnect = () => {
    return toast.error("Connect your wallet", {
      position: "top-center",
    });
  };

  return (
    <header className="py-8 bg-[#02080B]">
      <div className="w-[90%] mx-auto lg:flex md:flex justify-between items-center hidden font-montserrat">
        <img src={logo} alt="" className="w-[235px] h-[43px]" />
        <nav>
          <NavLink
            to="/"
            className="text-white hover:text-[#5CE3FB] hover:font-[700] mr-10 text-[18px]"
          >
            Home
          </NavLink>

          <button
            onClick={handleConnect}
            className="text-white hover:text-[#5CE3FB] hover:font-[700] mr-10 text-[18px]"
          >
            View Funding Requests
          </button>

          <button
            onClick={handleConnect}
            className="text-white hover:text-[#5CE3FB] hover:font-[700]  text-[18px]"
          >
            Register for Funding
          </button>
         
        </nav>
        {!isConnected ? <button className="bg-gradient-to-r from-[#6AFEB0] to-[#5CE3FB] rounded-lg p-4 text-[#111012] font-montserrat mr-4 lg:text-[20px] md:text-[20px] text-[18px]" onClick={() => open()}>Connect Wallet</button> : <w3m-button /> }
      </div>
      <div className="w-[95%] mx-auto flex justify-between lg:hidden md:hidden relative">
        <img src={logo} alt="" className="w-[185px] h-[43px]" />
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          color="#110A03"
          direction="right"
        />
        {isOpen && (
          <nav className="flex flex-col bg-gradient-to-r from-[#110A03] via-[#110A03] to-[#DA8450] p-8 py-12 h-[100vh] w-[100%] absolute top-20 left-0 bg-baseBlack/70 z-50">
            <NavLink
              to="/"
              className="text-white hover:text-[#5CE3FB] hover:font-[700] mb-6 text-[18px]"
            >
              Home
            </NavLink>

            <button
              onClick={handleConnect}
              className="text-white hover:text-[#5CE3FB] hover:font-[700] mr-10 text-[18px]"
            >
              View Funding Requests
            </button>

            <button
              onClick={handleConnect}
              className="text-white hover:text-[#5CE3FB] hover:font-[700] mr-10 text-[18px]"
            >
              Register for Funding
            </button>

            <div className="mt-6">
            {!isConnected ? <button className="bg-gradient-to-r from-[#6AFEB0] to-[#5CE3FB] rounded-lg p-4 text-[#111012] font-montserrat mr-4 lg:text-[20px] md:text-[20px] text-[18px]" onClick={() => open()}>Connect Wallet</button> : <w3m-button /> }
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
