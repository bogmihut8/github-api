import React from "react";
import { render } from "react-dom";
import { withRouter } from 'react-router';

const AppContext = React.createContext();

class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      isLoading: false,
      repos: [],
      orgs: [],
      forUsername: (value) => {
        this.setState({
          username: value,
          isLoading: true
        },
        async () => {
            const response = await fetch('https://api.github.com/users/'+value+'/repos');
            const json = await response.json();
            this.setState({ repos: json, isLoading: false }, () => {this.props.history.push('/repositories')});
          }
        );
      }
    };
  }

  render() {
    console.log(this.state)
    const { username, isLoading, repos, orgs } = this.state;
    return (
      <AppContext.Provider value={{ username, isLoading, repos, orgs, forUsername: this.state.forUsername }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default withRouter(AppProvider)

export const Consumer = AppContext.Consumer;
