import { Navigate } from "react-router-dom";
import { useFirebaseContext } from "./contexts/FirebaseContext";

export default function App() {
  const {signIn, firebaseState} = useFirebaseContext();

  return (
    <>
      {firebaseState.user !== null
        ? (<Navigate to="/dashboard" />)
        : (
          <main className="bg-[rgb(255,245,231)] h-screen flex items-center justify-center">
            <div className="bg-[#624e41] text-white px-8 py-12 flex flex-col items-center gap-4 rounded-lg">
              <div className="text-center">
                  <h1 className="text-3xl">FossilFinances</h1>
                  <h2 className="text-xl">Howdy! Please sign in.</h2>
              </div>
              <button className="px-8 py-4 bg-black text-[#f0f0f0] text-lg rounded-md hover:bg-[rgb(255,245,231)] hover:text-black transition-all" onClick={() => signIn()}>Sign In</button>
            </div>
          </main>
      )}
    </>
  );
}

