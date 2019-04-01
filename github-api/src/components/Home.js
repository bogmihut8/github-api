import React from 'react'

class Home extends React.Component {
  handleOnChange = () => {
    console.log("schimbat");
  }
  
  render() {
    return (
      <div>
        <img className="icon" src="/github.png" alt="Github Icon" />
        <h1>Github API - repositories and organizations</h1>
        <p className="under">Please insert a username in order to fetch their data and display it for you. </p>
        <div className="username-container">
          <input type="text" className="username" onChange={this.handleOnChange} placeholder="Enter username..." />
          <input type="button" value="Search"/>
        </div>
      </div>
    );
  }
}

export default Home
