import React from 'react'
import AppProvider, { Consumer } from './AppProvider'
import Repo from './Repo'

class Repositories extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  
  render() {
    return (
      <div>
        <Consumer>
          {state => (
            <div className="repos-header">
              <h2><b>Username:</b> <img src={state.repos[0].owner.avatar_url} />{state.username}<a href={state.repos[0].owner.html_url} target="_blank" className="github-link">{state.repos[0].owner.html_url}</a></h2>
            </div>
          )}
        </Consumer>
        <Consumer>
          {state => (
            <ul className="repos-list">
            {
              state.repos.map((repo, index) =>
                <Repo 
                    name={repo.name} 
                    html_url={repo.html_url}
                    created_at={repo.created_at}
                    language={repo.language}
                    watchers={repo.watchers}
                    key={index}
                />
            )}
            </ul>
          )}
        </Consumer>
        <Consumer>
          {state => (
            <div>
              <a href="javascript:;" onClick={() => state.forUsername(state.username, 1)}>Prev</a>
              <a href="javascript:;" onClick={() => state.forUsername(state.username, 2)}>Next</a>
            </div>
           )
          }
        </Consumer>
      </div>
    )
}
}


export default Repositories
