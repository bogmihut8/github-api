import React from 'react'
import AppProvider, { Consumer } from './AppProvider'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", showError: false };
  }
  
  handleClick = (state, event) => {
    state.forUsername(this.state.value, 1)
  }
  
  handleKeyPress = (state, event) => {
    if(event.key === 'Enter') { 
      if(this.state.value !== "") {
        state.forUsername(this.state.value, 1); 
      }
      else {
        this.setState({showError: true})
      }
    }
    else {
      this.setState({showError: false})
    }
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
                  <input type="text" className="username" onKeyPress={(e) => this.handleKeyPress(state, e)}  value={this.state.value} onChange={(e) => this.setState({value: e.target.value })} placeholder="Enter new username..." />
                  <input type="button" value="Search" onClick={(e) => this.handleClick(state, e)}/>
                </div>
              )}
            </Consumer>

            { this.state.showError
              ? <div>Make sure the field is not empty.</div>
              : <div></div>
            }
            
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
