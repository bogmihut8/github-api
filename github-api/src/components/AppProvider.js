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
      showHeader: false,
      reposPage: 1,
      orgsPage: 1,
      forUsername: (value, page) => {
        this.setState({
          username: value,
          isLoading: true
        },
        async () => {
            let data = await Promise.all([
              fetch('https://api.github.com/users/'+value+'/repos?page='+page).then((response) => response.json()),
              fetch('https://api.github.com/users/'+value+'/orgs?page='+page).then((response) => response.json())
            ]);
            this.setState({ repos: data[0], orgs: data[1], isLoading: false, showHeader: true }, () => {this.props.history.push('/repositories')});
          }
        );
      }
    };
  }

  render() {
    console.log(this.state);
    const { username, isLoading, repos, orgs, showHeader } = this.state;
    return (
      <AppContext.Provider value={{ username, isLoading, repos, orgs, showHeader, forUsername: this.state.forUsername }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default withRouter(AppProvider)

export const Consumer = AppContext.Consumer;
