import React from 'react'
import AppProvider, { Consumer } from './AppProvider'
import Org from './Org'

class Organizations extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: 1 };
  }
  
  handleDirectionClick = (state, type) => {
    if(type === 'prev' && this.state.page > 1) {
      this.setState({ page: this.state.page - 1}, () => state.forUsername(state.username, this.state.page))
    }
    else if(type === 'next' && state.repos.length === 30) {
      this.setState({ page: this.state.page + 1}, () => state.forUsername(state.username, this.state.page))
    }
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
        <Consumer>
          {state => (
            <div className="direction">
              <a href="#" onClick={() => this.handleDirectionClick(state, 'prev')}>&laquo;&nbsp;Prev</a>
              <a href="#" onClick={() => this.handleDirectionClick(state, 'next')}>Next&nbsp;&raquo;</a>
            </div>
           )
          }
        </Consumer>
      </div>
    )
}
}


export default Organizations
