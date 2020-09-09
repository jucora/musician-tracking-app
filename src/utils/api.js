import axios from 'axios';

const Api = (() => {
  const getMeasures = () => new Promise(resolve => {
    axios
      .get('http://localhost:3001/measures', {
        headers: {
          Authorization: JSON.parse(localStorage.getItem('token')),
        },
      })
      .then(response => {
        resolve(response);
      });
  });
  const getSkills = () => new Promise(resolve => {
    axios
      .get('http://localhost:3001/skills', {
        headers: {
          Authorization: JSON.parse(localStorage.getItem('token')),
        },
      })
      .then(response => {
        resolve(response);
      });
  });
  const logout = () => new Promise(resolve => {
    axios
      .delete('http://localhost:3001/logout', {
        withCredentials: true,
      })
      .then(response => {
        resolve(response);
      });
  });
  const destroySkill = skillId => new Promise(resolve => {
    axios
      .delete(`http://localhost:3001/skills/destroy/${skillId}`)
      .then(response => {
        resolve(response);
      });
  });
  const addMeasure = (skill, score) => new Promise(resolve => {
    axios
      .post('http://localhost:3001/measures', {
        measure: {
          id: skill.skill_id,
          newScore: score,
        },
      })
      .then(response => {
        resolve(response);
      });
  });
  const registration = (email, password, passwordConfirmation) => new Promise(resolve => {
    axios
      .post('http://localhost:3001/registrations', {
        user: {
          email,
          password,
          password_confirmation: passwordConfirmation,
        },
      })
      .then(response => {
        resolve(response);
      });
  });
  const newSession = (email, password) => new Promise(resolve => {
    axios
      .post('http://localhost:3001/sessions', {
        user: {
          email,
          password,
        },
      })
      .then(response => {
        resolve(response);
      });
  });
  const loggedIn = () => new Promise(resolve => {
    axios
      .get('http://localhost:3001/logged_in', {
        headers: {
          Authorization: JSON.parse(localStorage.getItem('token')),
        },
      })
      .then(response => {
        resolve(response);
      });
  });

  return {
    getMeasures,
    getSkills,
    logout,
    destroySkill,
    addMeasure,
    registration,
    newSession,
    loggedIn,
  };
})();

export default Api;
