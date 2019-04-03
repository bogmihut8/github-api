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
              fetch('https://api.github.com/users/'+value+'/repos?access_token=db5da717160e60b104dbfc673a334feebc2acc5e&page='+page).then((response) => response.json()),
              fetch('https://api.github.com/users/'+value+'/orgs?access_token=db5da717160e60b104dbfc673a334feebc2acc5e').then((response) => response.json())
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
