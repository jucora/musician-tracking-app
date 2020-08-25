import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Home from './Home';
import Dashboard from './Dashboard';
import { connect } from 'react-redux';
import { changeLoggedInStatus, setCurrentUser } from '../actions/index';
import store from '../index';

class App extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   loggedInStatus: 'NOT_LOGGED_IN',
    //   user: {},
    // };

    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogout() {
    const { changeLoggedInStatus, setCurrentUser } = this.props;
    changeLoggedInStatus('NOT_LOGGED_IN');
    setCurrentUser({});

    // this.setState({
    //   loggedInStatus: 'NOT_LOGGED_IN',
    //   user: {},
    // });
  }

  handleLogin(data) {
    console.log('datica', data);
    console.log('store es ', store.getState());
    const { changeLoggedInStatus, setCurrentUser } = this.props;

    changeLoggedInStatus('LOGGED_IN');
    setCurrentUser(data.user);

    // this.setState({
    //   loggedInStatus: 'LOGGED_IN',
    //   user: data.user,
    // });
  }

  checkLoginStatus() {
    const { changeLoggedInStatus, setCurrentUser, loggedInStatus } = this.props;
    axios
      .get('http://localhost:3001/logged_in', { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in && loggedInStatus === 'NOT_LOGGED_IN') {
          changeLoggedInStatus('LOGGED_IN');
          setCurrentUser(response.data.current_user);
          // this.setState({
          //   loggedInStatus: 'LOGGED_IN',
          //   user: response.data.current_user,
          // });
        } else if (
          !response.data.logged_in &&
          loggedInStatus
          // this.state.loggedInStatus === 'LOGGED_IN'
        ) {
          changeLoggedInStatus('NOT_LOGGED_IN');
          setCurrentUser({});
          // this.setState({ loggedInStatus: 'NOT_LOGGED_IN', user: {} });
        }
      })
      .catch((error) => {
        console.log('check login error', error);
      });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  render() {
    const { loggedInStatus } = this.props;
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Home
                  {...props}
                  handleLogin={this.handleLogin}
                  loggedInStatus={loggedInStatus}
                  // loggedInStatus={this.state.loggedInStatus}
                  handleLogout={this.handleLogout}
                />
              )}
            />
            <Route
              exact
              path="/dashboard"
              render={(props) => (
                <Dashboard
                  {...props}
                  handleLogout={this.handleLogout}
                  loggedInStatus={loggedInStatus}
                  /*  loggedInStatus={this.state.loggedInStatus} */
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedInStatus: state.musicianReducer.loggedInStatus,
  user: state.musicianReducer.user,
  loggedInStatus: state.musicianReducer.loggedInStatus,
});

const matchDispatchToProps = (dispatch) => ({
  changeLoggedInStatus: (newStatus) => {
    dispatch(changeLoggedInStatus(newStatus));
  },
  setCurrentUser: () => {
    dispatch(setCurrentUser());
  },
});

export default connect(mapStateToProps, matchDispatchToProps)(App);
