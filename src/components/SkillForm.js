/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class SkillForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const { name } = this.state;
    const { history } = this.props;
    e.preventDefault();

    axios
      .post(
        'http://localhost:3001/skills',
        {
          newSkill: {
            name,
          },
        },
        { withCredentials: true }
      )
      .then(() => {
        history.push('/track');
      })
      .catch((error) => {
        console.error('error', error);
      });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { name } = this.state;
    return (
      <div className="addSkillForm">
        <form onSubmit={this.handleSubmit}>
          <h2>New Skill</h2>
          <input
            type="text"
            name="name"
            placeholder="Skill Name"
            value={name}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Add New Skill</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.musicianReducer.user,
});

export default connect(mapStateToProps, null)(SkillForm);
