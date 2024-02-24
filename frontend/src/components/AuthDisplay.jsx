import { useFirebaseContext } from "../contexts/FirebaseContext";

export function AuthDisplay() {
  const {firebaseState, signIn} = useFirebaseContext();

  return (
    <>
      {firebaseState.user !== null
        ? (
          <h1>Signed In.</h1>
        ) 
        : (
          <div>
            <button onClick={() => signIn()}>Sign In</button>
          </div>
        )}
    </>
  );
}
