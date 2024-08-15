import { useEffect } from 'react';
import { useFirebaseContext } from '../contexts/FirebaseContext';
import {UserFinancialsContextProvider, useUserFinancials} from '../contexts/UserFinancialsContext';

export function AuthenticatedPage({children}) {
  return (
    <UserFinancialsContextProvider>
      <AuthenticatedPageChild>
        {children}
      </AuthenticatedPageChild>
    </UserFinancialsContextProvider>
  );
}

function AuthenticatedPageChild({children}) {
  const {firebaseState} = useFirebaseContext();
  const {getAllAccountInfo, setFinancials} = useUserFinancials();

  useEffect(() => {
    // Check if user account info has been cached
    const userUID = firebaseState.user.uid;
    const userToken = firebaseState.user.accessToken;
    const localInfo = localStorage.getItem(`${userUID}-info`);
    if (localInfo !== null) {
      setFinancials(JSON.parse(localInfo));
    } else {
      getAllAccountInfo(userUID, userToken);
    }
  }, []);

  return <>{children}</>;
}
