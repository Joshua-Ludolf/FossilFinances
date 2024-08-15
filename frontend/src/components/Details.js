import React from "react";

const Details = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <>
      <div className="fixed h-full top-0 z-10 w-full bg-black opacity-30">
        hello
      </div>
      <div className=" shadow-lg fixed  top-[20%] left-[25%] bg-white z-20 h-[60%] w-[50%] rounded-2xl flex flex-col">
        <div className=" my-4 flex justify-around">
          <div className="text-xl font-bold  py-2">Details</div>
          <button
            className="text-xl font-bold bg-red-300 hover:bg-red-200 transition-all py-2 rounded-md px-5"
            onClick={onClose}
          >
            Close
          </button>
        </div>
        <div className="flex-col">
          <p className="text-center">Apple Pay</p>
          <h1 className="Balance mt-2 font-bold text-6xl text-center text-red-500">
            -$50
          </h1>
          <p className="text-center p-3 mt-3">Accoount name</p>
          <p className="text-center p-3"> Remaining Balance: $</p>
          <p className="text-center p-3">01/01/2024</p>
          <p className="text-center p-3">Location</p>
          <p className="text-center p-3">Transaction Type</p>
        </div>
      </div>
    </>
  );
};

export default Details;
