import React, { useState } from "react";
import Navbar from "./Navbar";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { HiOutlineClipboardList } from "react-icons/hi";
import { AuthDisplay } from "./AuthDisplay";
import Details from "./Details";

function Transactions() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="bg-[rgb(255,245,231)] h-auto pb-[200px] min-h-screen">
        <div className=" flex justify-around pt-12 items-center">
          <h1 className="text-left text-6xl font-bold leading-[80px]">
            Recent Transactions
          </h1>
          <AuthDisplay />
        </div>

        <div className=" mt-10 px-10 flex justify-around mb-10">
          <div className="shadow-md  rounded-3xl h-[148px] w-[60%] bg-white text-left justify-between flex align-middle ">
            <div className="mx-8 flex-col items-center justify-center content-center center mt-4">
              <p className="text-[#624E41] font-mono">
                01/01/2024 - ACCOUNT NAME
              </p>
              <h1 className="Balance mt-6 font-bold text-6xl text-red-black">
                Apple TV
              </h1>
            </div>
            <div className="mx-8 flex-col items-center justify-center content-center center mt-4">
              <p className="text-[#624E41] font-mono text-right">
                REMAINING BALANCE: $----
              </p>
              <h1 className="Balance mt-6 font-bold text-6xl text-right text-red-500">
                -$50
              </h1>
            </div>
          </div>
          <div
            onClick={() => setOpenModal(true)}
            className="Button1 shadow-md rounded-3xl h-[148px] w-[25%] bg-white flex flex-col justify-center items-center text-center text-2xl font-bold"
          >
            <div className="icon">
              <HiOutlineClipboardList size={80} />
            </div>
            <div className="text">Details</div>
          </div>
        </div>

        <Details open={openModal} onClose={()=> setOpenModal(false)} />

        <div className="relative">
          <Navbar />
        </div>
      </div>
    </>
  );
}

export default Transactions;
