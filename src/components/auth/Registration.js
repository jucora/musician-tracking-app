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
      password_confirmation: '',
      errors: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    const { handleSuccessfulAuth } = this.props;
    const { email, password, password_confirmation } = this.state;

    e.preventDefault();
    axios
      .post(
        'http://localhost:3001/registrations',
        {
          user: {
            email,
            password,
            password_confirmation,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.warn(response);
        if (response.data.errors) {
          console.warn(response);

          this.setState({ errors: response.data.errors });
        }
        if (response.data.user) {
          console.warn(response);
          handleSuccessfulAuth(response.data);
        }
      })
      .catch((error) => {
        console.error('Registration error', error);
      });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { email, password, password_confirmation, errors } = this.state;
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          {errors.map((error) => (
            <h2 key={error} className="error">
              {error}
            </h2>
          ))}

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
            name="password_confirmation"
            placeholder="Password confirmation"
            value={password_confirmation}
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
