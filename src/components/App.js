/* eslint-disable react/jsx-props-no-spreading */
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import Home from './Home';
import Track from './Track';
import { changeLoggedInStatus, setCurrentUser } from '../actions/index';
import NavBar from './NavBar';
import SkillForm from './SkillForm';
import Detail from './Detail';
import Progress from './Progress';
import More from './More';
import Login from './auth/Login';
import Registration from './auth/Registration';
import Header from './Header';

class App extends React.Component {
  constructor() {
    super();
    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.state = { contentLoaded: false };
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  checkLoginStatus() {
    const { changeLoggedInStatus, setCurrentUser, loggedInStatus } = this.props;
    axios
      .get('http://localhost:3001/logged_in', { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in && loggedInStatus === 'NOT_LOGGED_IN') {
          changeLoggedInStatus('LOGGED_IN');
          setCurrentUser(response.data.current_user);
        } else if (!response.data.logged_in && loggedInStatus === 'LOGGED_IN') {
          changeLoggedInStatus('NOT_LOGGED_IN');
          setCurrentUser({});
        }
        this.setState({ contentLoaded: true });
      })
      .catch((error) => {
        console.error('check login error', error);
      });
  }

  handleLogin(data) {
    const { changeLoggedInStatus, setCurrentUser } = this.props;
    changeLoggedInStatus('LOGGED_IN');
    setCurrentUser(data.user);
  }

  handleLogout() {
    const { changeLoggedInStatus, setCurrentUser } = this.props;
    changeLoggedInStatus('NOT_LOGGED_IN');
    setCurrentUser({});
  }

  render() {
    const { loggedInStatus, user } = this.props;
    const { contentLoaded } = this.state;
    return contentLoaded ? (
      <div className="App">
        <BrowserRouter>
          {loggedInStatus === 'NOT_LOGGED_IN' ? <Header /> : null}
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Registration} />
            <Route
              exact
              path="/"
              render={(props) => (
                <Home
                  {...props}
                  handleLogin={this.handleLogin}
                  loggedInStatus={loggedInStatus}
                  handleLogout={this.handleLogout}
                />
              )}
            />
            <Route exact path="/skillForm" component={SkillForm} />
            <Route exact path="/track" render={() => <Track user={user} />} />

            <Route path="/detail/:id" component={Detail} />
            <Route path="/progress" component={Progress} />
            <Route
              path="/more"
              render={(props) => (
                <More
                  {...props}
                  handleLogin={this.handleLogin}
                  loggedInStatus={loggedInStatus}
                  handleLogout={this.handleLogout}
                />
              )}
            />
          </Switch>
          {loggedInStatus === 'LOGGED_IN' ? <NavBar /> : null}
        </BrowserRouter>
      </div>
    ) : null;
  }
}

App.propTypes = {
  changeLoggedInStatus: Proptypes.func.isRequired,
  setCurrentUser: Proptypes.func.isRequired,
  loggedInStatus: Proptypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  loggedInStatus: state.musicianReducer.loggedInStatus,
  user: state.musicianReducer.user,
});

const matchDispatchToProps = (dispatch) => ({
  changeLoggedInStatus: (newStatus) => {
    dispatch(changeLoggedInStatus(newStatus));
  },
  setCurrentUser: (user) => {
    dispatch(setCurrentUser(user));
  },
});

export default connect(mapStateToProps, matchDispatchToProps)(App);
