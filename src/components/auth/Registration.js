import React from 'react';
import axios from 'axios';

export default class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
      registrationErrors: '',
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
        handleSuccessfulAuth(response.data);
      })
      .catch((error) => {
        console.log('Registration error', error);
      });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { email, password, password_confirmation } = this.state;
    return (
      <div>
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
