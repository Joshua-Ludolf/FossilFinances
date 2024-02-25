import { useState } from "react";
import { useFirebaseContext } from "../contexts/FirebaseContext";
import { AuthenticatedPage } from "../pages/AuthenticatedPage";

export function AuthDisplay() {
  const {firebaseState} = useFirebaseContext();

  return (
    <>
      {firebaseState.user !== null
        ? (
          <AuthenticatedButton />
        ) 
        : (
          <UnAuthedButton />
        )}
    </>
  );
}

function AuthenticatedButton() {
  const [openProfile, setOpenProfile] = useState(false);
  const {firebaseState, signOut} = useFirebaseContext();
  const {user} = firebaseState;

  return (
    <>
      {user === undefined
        ? (<div>Loading...</div>)
        : (
          <div className="relative">
            <button
              className="size-24 rounded-full"
              style={{
                backgroundImage: `url(${user.photoURL})`,
                backgroundSize: 'cover'
              }}
              onClick={() => setOpenProfile(!openProfile)}
            >
              <span className="sr-only">Profile Menu</span>
            </button>
            {openProfile && (
              <div className="absolute right-0 top-100 translate-x-[12.5%] flex flex-col gap-4 text-center top-[115%] bg-white rounded-xl p-2 w-[124px] text-lg font-medium shadow-lg">
                <p className="">{user.displayName}</p>
                <button className=" rounded-md hover:bg-[#f0f0f0] font-bold" onClick={() => signOut()}>
                  Sign Out
                </button>
              </div>
            )}
          </div>
        )
      }
    </>
  );
}

function UnAuthedButton() {
  const {signIn} = useFirebaseContext();
  return (
    <button className="px-8 py-4 bg-black text-[#f0f0f0] text-lg rounded-md hover:bg-[#624e41] transition-all" onClick={() => signIn()}>Sign In</button>
  );
}
