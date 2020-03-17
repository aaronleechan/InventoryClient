import React from 'react';
import logo from './logo.svg';
import './App.css';
import {StoreProvider} from './store/store'
import Application from '../src/components'

export const App = ()=> {
  return (
    <StoreProvider>
      <Application/>
    </StoreProvider>
  );
}

export default App;
