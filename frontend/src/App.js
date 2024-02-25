import "./App.css";
import React, { useEffect, useState, userEffect } from "react";
import Homepage from "./components/Homepage";
// import React, {useEffect, useState} from 'react'
import { FirebaseContextProvider } from "./contexts/FirebaseContext";
import KnowledgeBase from "./components/KnowledgeBase";
import Transactions from "./components/Transactions";

function App() {
  // const [data, setData ] = useState({})

  // useEffect(() => {

  //   fetch('http://127.0.0.1:5000/api/data')
  //     .then(response=>response.json())
  //     .then(data=>setData(data))
  //     .catch(e => console.log(e));
  // },[]);

  return (
    <FirebaseContextProvider>
      <div className="App">
        <Homepage />
        {/* <h1 className=' underline text-lg'>Hello</h1>
      <h1>{ data.message }</h1> */}
      </div>
    </FirebaseContextProvider>
  );
}

export default App;
