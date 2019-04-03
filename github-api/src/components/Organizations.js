import React from 'react'
import AppProvider, { Consumer } from './AppProvider'
import { Link } from 'react-router-dom'
import Org from './Org'

class Organizations extends React.Component {
  render() {
    return (
      <div>
        <div className="back">
          <Link to='/'>&lsaquo;&nbsp;Back</Link>
        </div>
        <Consumer>
          {state => (
            <div className="repos-header">
              <h2><b>Username:</b> <img src={state.repos[0].owner.avatar_url} />{state.username}<a href={state.repos[0].owner.html_url} target="_blank" className="github-link">{state.repos[0].owner.html_url}</a></h2>
            </div>
          )}
        </Consumer>
        <Consumer>
          {state => (
            <ul className="orgs-list">
            {
              state.orgs.map((org, index) =>
                <Org 
                    avatar_url={org.avatar_url} 
                    login={org.login}
                    description={org.description}
                    url={org.url}
                    key={index}
                />
            )}
            </ul>
          )}
        </Consumer>
      </div>
    )
}
}


export default Organizations
