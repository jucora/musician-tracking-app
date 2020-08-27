/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
import React from 'react';
import axios from 'axios';
import PropType from 'prop-types';

export default class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    const { handleSuccessfulAuth } = this.props;
    const { email, password, passwordConfirmation } = this.state;

    e.preventDefault();
    axios
      .post(
        'http://localhost:3001/registrations',
        {
          user: {
            email,
            password,
            passwordConfirmation,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        handleSuccessfulAuth(response.data);
      })
      .catch((error) => {
        console.error('Registration error', error);
      });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { email, password, passwordConfirmation } = this.state;
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="passwordConfirmation"
            placeholder="Password confirmation"
            value={passwordConfirmation}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

Registration.propTypes = {
  handleSuccessfulAuth: PropType.func.isRequired,
};
