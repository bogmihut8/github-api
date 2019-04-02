import React from 'react'
import Header from './Header'
import Main from './Main'
import './App.css';
import AppProvider, { Consumer } from './AppProvider'

const App = () => (
  <div className="App">
    <Header />
    
    <AppProvider>
      <Main />
    </AppProvider>
    <p className="footer">
      &copy; Copyright 2019
    </p>
  </div>
)

export default App
