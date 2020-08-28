import React from 'react';
import axios from 'axios';

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
    const { skill } = this.props.location.state;
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
      .then((response) => {
        history.push('/progress');
        console.log('response', response);
      })
      .catch((error) => {
        console.error('error', error);
      });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { skillName, skill } = this.props.location.state;
    const { score } = this.state;
    const { loggedInStatus, history } = this.props;
    return loggedInStatus === 'LOGGED_IN' ? (
      <div>
        <h1>{skillName}</h1>
        <h2>Add Score</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="score"
            placeholder="Score"
            value={score}
            onChange={this.handleChange}
            required
          />
          <button type="submit">Add Score</button>
          <button
            type="button"
            onClick={() => this.handleClick(skill.skill_id)}
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

export default Detail;
