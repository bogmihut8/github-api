import React from 'react'
import AppProvider, { Consumer } from './AppProvider'

const Repositories = () => (
  <AppProvider>
    <div>
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
  </AppProvider>
)


export default Repositories
