import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { FirebaseContextProvider } from "./contexts/FirebaseContext";
import KnowledgeBase from './components/KnowledgeBase';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/knowledge-base',
        element: <KnowledgeBase />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseContextProvider>
      <RouterProvider router={router} />
    </FirebaseContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
