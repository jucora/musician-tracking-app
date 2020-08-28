/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

import React from 'react';
import axios from 'axios';
import PropTypes, { string } from 'prop-types';

class Detail extends React.Component {
  constructor() {
    super();
    this.state = { score: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(skillId) {
    axios
      .delete(`http://localhost:3001/skills/destroy/${skillId}`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response) {
          const { history } = this.props;
          history.push('/track');
        }
      })
      .catch((error) => {
        console.error('error', error);
      });
  }

  handleSubmit(e) {
    const { location } = this.props;
    const { skill } = location.state;
    const { score } = this.state;
    const { history } = this.props;

    e.preventDefault();
    axios
      .post(
        'http://localhost:3001/measures',
        {
          skill: {
            id: skill.skill_id,
            newScore: score,
          },
        },
        { withCredentials: true }
      )
      .then(() => {
        history.push('/progress');
      })
      .catch((error) => {
        console.error('error', error);
      });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { location } = this.props;
    const { skillName, skill } = location.state;
    const { score } = this.state;
    const { loggedInStatus, history } = this.props;
    return loggedInStatus === 'LOGGED_IN' ? (
      <div className="addSkillForm">
        <form onSubmit={this.handleSubmit}>
          <h1>Your Skill: {skillName}</h1>
          <h2>Add score</h2>
          <input
            type="text"
            name="score"
            placeholder="Score"
            value={score}
            onChange={this.handleChange}
            required
          />
          <button type="submit">Add Score</button>
          <br />
          <h2>Delete Skill</h2>
          <button
            type="button"
            onClick={() => this.handleClick(skill.skill_id)}
            className="deleteSkill"
          >
            Remove
          </button>
        </form>
      </div>
    ) : (
      (history.push('/'), true)
    );
  }
}

Detail.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  loggedInStatus: string.isRequired,
};

export default Detail;
