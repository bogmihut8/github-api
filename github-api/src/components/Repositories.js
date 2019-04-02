import React from 'react'
import AppProvider, { Consumer } from './AppProvider'

const Repositories = () => (
    <div>
      <Consumer>
        {state => (
                <div className="repos-header">
                  <h2><b>Username:</b> <img src={state.repos[0].owner.avatar_url} />{state.username}<a href={state.repos[0].owner.html_url} target="_blank" class="github-link">{state.repos[0].owner.html_url}</a></h2>
                </div>
              )}
      </Consumer>
      <Consumer>
        {state => (
                <ul>
                  {
                    state.repos.map((repo, index) =>
                    // Only do this if items have no stable IDs
                    <li key={index}>
                      {repo.name}
                    </li>
                    )}
                </ul>
              )}
      </Consumer>
    </div>
)


export default Repositories
