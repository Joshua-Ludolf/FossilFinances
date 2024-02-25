import React from "react";
import {Link} from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { HiOutlineInformationCircle } from "react-icons/hi";

function Navbar() {
  return (
    <>
      <div className=" rounded-t-xl fixed bottom-[0%] bg-[#624E41] w-full h-32 flex row  justify-around items-center text-[#FFF5E7] font-bold text-lg">
        <Link to="/account/transactions" className="flex-col px-8 py-2 rounded-xl align-middle hover:bg-[#75665d] transition-all">
          <HiOutlineMenuAlt2 size={60} className="h-15 w-[100%]" />
          <h1>Transactions</h1>
        </Link>
        <Link to="/" className="flex-col px-8 py-2 rounded-xl align-middle hover:bg-[#75665d] transition-all">
          <HiHome size={60} className="h-15 w-[100%]" />
          <h1>Home</h1>
        </Link>
        <Link to="/knowledge-base" className="flex-col px-8 py-2 rounded-xl align-middle hover:bg-[#75665d] transition-all">
          <HiOutlineInformationCircle size={60} className="h-15 w-[100%]" />
          <h1>Knowledge Base</h1>
        </Link>
      </div>
    </>
  );
}

export default Navbar;
