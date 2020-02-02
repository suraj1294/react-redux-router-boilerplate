import React from 'react';
import logo from './logo.svg';
import './App.css';

import { configureStore } from './store';
import { Provider } from 'react-redux';
import Routes from './routes';


const store = configureStore();

function App() {
  return (
   <Provider store = { store }> 
      <Routes/>     
   </Provider>    
  );
}

export default App;
