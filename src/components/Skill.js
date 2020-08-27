import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

class Skill extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3001/skills', { withCredentials: true })
      .then((response) => {
        console.log('response', response);
        this.setState({ skills: response.data.currentSkills });
      })
      .catch((error) => {
        console.error('error', error);
      });
  }

  createDetail(array) {
    return array.map((skill, index) => (
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
