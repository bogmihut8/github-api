import React from 'react'
import Header from './Header'
import Main from './Main'
import './App.css';
import AppProvider, { Consumer } from './AppProvider'

const App = () => (
  <div className="App">
    <AppProvider>
      <Consumer>
        {state => (
          <div className={state.showHeader ? 'header show' : 'header'}>
            <Header />
          </div>
        )}
      </Consumer>
      <Main />
    </AppProvider>
  </div>
)

export default App
