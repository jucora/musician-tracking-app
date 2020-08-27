import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

class Skill extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  getCurrentSkills() {
    axios
      .get('http://localhost:3001/skills', { withCredentials: true })
      .then((response) => {
        this.setState({ skills: response.data.currentSkills });
        console.log('resppp', response);
        return response;
      })
      .catch((error) => {
        console.error('error', error);
      });
  }

  componentDidMount() {
    this.getCurrentSkills();
  }

  handleClick(skillId) {
    axios
      .delete(`http://localhost:3001/skills/destroy/${skillId}`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response) {
          this.setState({
            skills: this.getCurrentSkills().theaadasn.data.currentSkills,
          });
        }
      })
      .catch((error) => {
        console.error('error', error);
      });
  }

  createDetail(array) {
    return array.map((skill, index) => (
      <div key={skill.skill_id}>
        <Link
          key={skill.skill_id}
          to={{
            pathname: `detail/${index}`,
            state: {
              skillName: skill.name,
              skill: skill,
            },
          }}
        >
          <h2 key={skill.name}>
            <p>{skill.name}</p>
            <p>{skill.sum}</p>
          </h2>
        </Link>
        <button type="button" onClick={() => this.handleClick(skill.skill_id)}>
          Remove
        </button>
      </div>
    ));
  }

  render() {
    const { skills } = this.state;
    return (
      <div>
        <h2>Your Custom Skills</h2>
        {this.createDetail(skills)}
      </div>
    );
  }
}

export default Skill;
