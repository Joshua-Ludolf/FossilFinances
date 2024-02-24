import { useFirebaseContext } from "../contexts/FirebaseContext";

export function AuthDisplay() {
  const {firebaseState, signIn} = useFirebaseContext();
  console.log(firebaseState.user);

  return (
    <>
      {firebaseState.user !== null
        ? (
          <div class="flex flex-row items-center gap-4">
            <img src={firebaseState.user.photoURL} alt="Profile." />
            <h3>{firebaseState.user.displayName}</h3>
          </div>
        ) 
        : (
          <div>
            <button onClick={() => signIn()}>Sign In</button>
          </div>
        )}
    </>
  );
}
