import {createContext, useContext, useEffect, useState} from 'react';
import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDFiW_vY9KC_Vr5mbDsoIvGYN-Gdsum8C0",
  authDomain: "fossilfinances.firebaseapp.com",
  projectId: "fossilfinances",
  storageBucket: "fossilfinances.appspot.com",
  messagingSenderId: "659845336882",
  appId: "1:659845336882:web:2038561c386b463f22d12b",
  measurementId: "G-Z413BT8NM7"
};

export const FirebaseContext = createContext({
  firebaseState: {
    app: null,
    auth: null,
    user: null,
  },
  setUser: () => {},
  signIn: () => {},
});

export const useFirebaseContext = () => useContext(FirebaseContext);

export const FirebaseContextProvider = ({children}) => {
  const [firebaseState, setFirebaseState] = useState({
    app: null,
    auth: null,
    user: null,
  });

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    setFirebaseState({...firebaseState, app, auth});
  }, []);

  const setUser = (user) => setFirebaseState({...firebaseState, user});

  const signIn = () => {
    signInWithPopup(firebaseState.auth, new GoogleAuthProvider()).then(uc => {
      const user = uc.user;
      setFirebaseState({...firebaseState, user});
    });
  };

  return (
    <FirebaseContext.Provider value={{firebaseState, setUser, signIn}}>
      {children}
    </FirebaseContext.Provider>
  );
}
