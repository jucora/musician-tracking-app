/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const skillImage = require('../img/skill.svg');

class Skill extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [],
    };
  }

  componentDidMount() {
    this.getCurrentSkills();
  }

  getCurrentSkills() {
    axios
      .get('http://localhost:3001/skills', { withCredentials: true })
      .then(response => {
        this.setState({ skills: response.data.currentSkills });
      })
      .catch(error => {
        console.error('error', error);
      });
  }

  render() {
    const { skills } = this.state;
    return (
      <div className="skillContainer">
        {skills.map((skill, index) => (
          <div key={skill.skill_id} className="skill">
            <Link
              key={skill.skill_id}
              to={{
                pathname: `detail/${index}`,
                state: {
                  skillName: skill.name,
                  skill,
                },
              }}
            >
              <div style={{ width: '100%', textAlign: 'center' }}>
                <img
                  style={{ width: '25%' }}
                  src={skillImage}
                  alt="Musical Skill"
                />
              </div>
              <h2 key={skill.name}>
                <p>{skill.name}</p>
                <p>{skill.sum}</p>
              </h2>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Skill;
