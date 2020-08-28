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

  getCurrentSkills() {
    axios
      .get('http://localhost:3001/skills', { withCredentials: true })
      .then((response) => {
        this.setState({ skills: response.data.currentSkills });
      })
      .catch((error) => {
        console.error('error', error);
      });
  }

  componentDidMount() {
    this.getCurrentSkills();
  }

  createDetail(array) {
    return array.map((skill, index) => (
      <div key={skill.skill_id} className="skill">
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
          <div style={{ width: '100%', textAlign: 'center' }}>
            <img
              style={{ width: '25%' }}
              src={require('../img/skill.svg')}
            ></img>
          </div>
          <h2 key={skill.name}>
            <p>{skill.name}</p>
            <p>{skill.sum}</p>
          </h2>
        </Link>
      </div>
    ));
  }

  render() {
    const { skills } = this.state;
    return <div className="skillContainer">{this.createDetail(skills)}</div>;
  }
}

export default Skill;
