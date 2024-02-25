import {createContext, useContext, useState} from 'react';

/// Allows for storing the user's current financial transactions in memory.
export const UserFinancialsContext = createContext({
  userFinancials: {
    accounts: [],
    fin_accounts: {}
  },
  setFinancials: (_financials) => {},
  getAllAccountInfo: (_accountId, _token) => {},
});

/// Wrapper for `useContext` on `UserFinancialsContext`.
export const useUserFinancials = () => useContext(UserFinancialsContext);

/// Provides the context for `UserFinancialsContext`.
export const UserFinancialsContextProvider = ({children}) => {
  const [userFinancials, setUserFinancials] = useState({
    accounts: [],
    fin_accounts: {}
  });

  const setFinancials = (fincs) => {
    setUserFinancials(fincs);
  };

  const getAllAccountInfo = async (accountId, _) => {
    const info = await (await fetch(
      `http://127.0.0.1:5000/account-info?user_id=${accountId}`
    )).json();
    console.log(info);
    setUserFinancials(info);
  };

  return (
    <UserFinancialsContext.Provider value={{userFinancials, setFinancials, getAllAccountInfo}}>
      {children}
    </UserFinancialsContext.Provider>
  );
}
