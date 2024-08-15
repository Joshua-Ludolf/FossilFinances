import Navbar from "./Navbar";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { HiOutlineClipboardList } from "react-icons/hi";
import { AuthDisplay } from "./AuthDisplay";
import { useFirebaseContext } from "../contexts/FirebaseContext";
import { useUserFinancials } from "../contexts/UserFinancialsContext";

function Homepage() {
  const {firebaseState} = useFirebaseContext();
  const {userFinancials} = useUserFinancials();
  return (
    <>
      <div className="bg-[rgb(255,245,231)] h-screen">
        <div className=" flex justify-around pt-12 items-center">
          <h1 className="text-left text-6xl font-bold leading-[80px]">
            Hi {firebaseState.user.displayName}, <br /> What do want to do today?
          </h1>
          <AuthDisplay />
        </div>

        {userFinancials.accounts.map((acctId, idx) => (
          <AccountListing account={userFinancials.fin_accounts[acctId]} key={idx} />
        ))}

        <div className="relative">
          <Navbar />
        </div>
      </div>
    </>
  );
}

function AccountListing({account}) {
  return (
    <div className=" mt-10 px-10 flex justify-around">
      <div className="shadow-md  rounded-3xl h-[148px] w-[40%] bg-white text-left flex-col align-middle ">
        <div className="mx-8 flex-col items-center justify-center content-center center mt-4">
          <p className="text-[#624E41] font-mono">{account.name} Account</p>
          <h1 className="Balance mt-6 font-bold text-6xl">
            {account.amount !== null ? (<>${account.amount}</>) : (<>$----</>)}
          </h1>
        </div>
      </div>
      <div className="Button1 shadow-md rounded-3xl h-[148px] w-[15%] bg-white flex flex-col justify-center items-center text-center text-2xl font-bold">
        <div className="icon">
          <HiOutlineClipboardList size={80} />
        </div>
        <div className="text">Statement</div>
      </div>
      <div className="Button1 shadow-md rounded-3xl h-[148px] w-[15%] bg-green-500 flex flex-col justify-center items-center text-center text-2xl font-bold">
        <div className="icon">
          <HiOutlineCurrencyDollar size={80} />
        </div>
        <div className="text">Pay</div>
      </div>
    </div>
    
  );
}

export default Homepage;
