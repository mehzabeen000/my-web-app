// import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from './store';

const container = document.querySelector('#root');
const root = createRoot(container!);

root.render(
  <Provider store={store}>
    {/* <BrowserRouter> */}
    <ToastContainer autoClose={2500} style={{ zIndex: 999999999 }} position='bottom-left' />
    <App />
    {/* </BrowserRouter> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
