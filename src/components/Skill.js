import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

class Skill extends React.Component {
  constructor() {
    super();
    this.state = {
      defaultSkills: [],
      userSkills: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3001/default_skills', { withCredentials: true })
      .then((response) => {
        this.setState({ defaultSkills: response.data.defaultSkills });
      })
      .catch((error) => {
        console.error('error', error);
      });

    axios
      .get('http://localhost:3001/user_skills', { withCredentials: true })
      .then((response) => {
        this.setState({ userSkills: response.data.userSkills });
      })
      .catch((error) => {
        console.error('error', error);
      });
  }

  createDetail(array) {
    return array.map((skill, index) => (
      <Link
        to={{
          pathname: `detail/${index}`,
          state: { skillName: skill.name },
        }}
      >
        <h2 key={skill.name}>
          <p>{skill.name}</p>
          <p>{skill.score}</p>
        </h2>
      </Link>
    ));
  }

  render() {
    const { defaultSkills, userSkills } = this.state;
    return (
      <div>
        <h2>Deafult Skills</h2>
        {this.createDetail(defaultSkills)}
        <h2>Your Custom Skills</h2>
        {this.createDetail(userSkills)}
      </div>
    );
  }
}

export default Skill;
