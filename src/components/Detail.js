import React from 'react';
import axios from 'axios';

class Detail extends React.Component {
  constructor() {
    super();
    this.state = { score: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const { skill } = this.props.location.state;
    const { score } = this.state;

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
    const { skillName } = this.props.location.state;
    const { score } = this.state;
    return (
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
        </form>
      </div>
    );
  }
}

export default Detail;
