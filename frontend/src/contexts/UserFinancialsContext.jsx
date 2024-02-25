import {createContext, useContext, useState} from 'react';

export const UserFinancialsContext = createContext({
  userFinancials: {
    accounts: [],
    fin_accounts: {}
  },
  setFinancials: (_financials) => {},
  getAllAccountInfo: (_accountId, _token) => {},
});

export const useUserFinancials = () => useContext(UserFinancialsContext);

export const UserFinancialsContextProvider = ({children}) => {
  const [userFinancials, setUserFinancials] = useState({
    accounts: [],
    fin_accounts: {}
  });

  const setFinancials = (fincs) => {
    setUserFinancials(fincs);
  };

  const getAllAccountInfo = async (accountId, _) => {
    //const info = await (await fetch('http://127.0.0.1:5000/account_info.json',
    //  {
    //    method: 'post',
    //    body: JSON.stringify({ accountId, token }),
    //    headers: { 'Content-Type': 'application/json' },
    //  }
    //)).json();
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
