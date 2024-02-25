import {createContext, useContext, useEffect, useState} from 'react';
import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut, setPersistence, browserSessionPersistence} from 'firebase/auth';

// Configuration for connecting to and using Firebase.
const firebaseConfig = {
  apiKey: "AIzaSyDFiW_vY9KC_Vr5mbDsoIvGYN-Gdsum8C0",
  authDomain: "fossilfinances.firebaseapp.com",
  projectId: "fossilfinances",
  storageBucket: "fossilfinances.appspot.com",
  messagingSenderId: "659845336882",
  appId: "1:659845336882:web:2038561c386b463f22d12b",
  measurementId: "G-Z413BT8NM7"
};

/// Stores the current state of the Firebase and user auth, as well as provdes
/// useful functions for the easier handliing of authentication state / flows.
export const FirebaseContext = createContext({
  firebaseState: {
    app: null,
    auth: null,
    user: null,
  },
  setUser: () => {},
  signIn: () => {},
  signOut: () => {},
});

/// Wrapper for `useContext` on the `FirebaseContext`.
export const useFirebaseContext = () => useContext(FirebaseContext);

/// Provides the `FirebaseContext`. Is used to track the user's current auth
/// state and the state of the Firebase application connection as a whole.
export const FirebaseContextProvider = ({children}) => {
  const [firebaseState, setFirebaseState] = useState({
    app: null,
    auth: null,
    user: null,
  });

  // Setup Firebase application connection on first page load.
  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        setFirebaseState({...firebaseState, app, auth});
      })
  }, []);

  const setUser = (user) => setFirebaseState({...firebaseState, user});

  const signIn = () => {
    signInWithPopup(firebaseState.auth, new GoogleAuthProvider()).then(uc => {
      const user = uc.user;
      setFirebaseState({...firebaseState, user});
    });
  };

  const signOutUser = () => {
    signOut(firebaseState.auth);
  };

  return (
    <FirebaseContext.Provider value={{firebaseState, setUser, signIn, signOut: signOutUser}}>
      {children}
    </FirebaseContext.Provider>
  );
}
