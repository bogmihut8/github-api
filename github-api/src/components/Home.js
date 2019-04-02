import React from 'react'
import AppProvider, { Consumer } from './AppProvider'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: ""};
  }
  
  render() {
    return (
        <div>
          <img className="icon" src="/github.png" alt="Github Icon" />
          <h1>Github API - repositories and organizations</h1>
          <p className="under">Please insert a username in order to fetch their data and display it for you. </p>

            <Consumer>
              {state => (
                <div className="username-container">
                  <input type="text" className="username" value={this.state.value} onChange={(e) => this.setState({value: e.target.value })} placeholder="Enter new username..." />
                  <input type="button" value="Search" onClick={() => state.forUsername(this.state.value, 1)}/>
                </div>
              )}
            </Consumer>
            
            <Consumer>
              {state => (
                <div className={state.isLoading ? "lds-dual-ring show" : "lds-dual-ring"}></div>
              )}
            </Consumer>
        </div>
    );
  }
}

export default Home
