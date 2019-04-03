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
      forUsername: (value, page) => {
        this.setState({
          username: value,
          isLoading: true
        },
        async () => {
            let data = await Promise.all([
              fetch('https://api.github.com/users/'+value+'/repos?page='+page).then((response) => response.json()),
              fetch('https://api.github.com/users/'+value+'/orgs').then((response) => response.json())
            ]);
            this.setState({ repos: data[0], orgs: data[1], isLoading: false, showHeader: true }, () => {
              if(this.state.repos.message) {
                alert("Something went wrong. The API rate limit was reached or the server is down.");
                this.setState({ showHeader: false });
              }
              else {
                this.props.history.push('/repositories')
              }
              
            });
          }
        );
      }
    };
  }

  render() {
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
