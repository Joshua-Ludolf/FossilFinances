import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState, userEffect } from 'react'


function App() {
  const [data, setData ] = useState({})

  useEffect(() => {

    fetch('http://127.0.0.1:5000/api/data')
      .then(response=>response.json())
      .then(data=>setData(data))
      .catch(e => console.log(e));
  },[]);

  return (
    <div className="App">
      <h1 className=' underline text-lg'>Hello</h1>
      <h1>{ data.message }</h1>
    </div>
  );
}

export default App;
