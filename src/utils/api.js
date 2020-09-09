import axios from 'axios';

const Api = (() => {
  const addSkill = (name) =>
    new Promise((resolve) => {
      axios
        .post('https://musician-tracking-api.herokuapp.com/skills', {
          newSkill: {
            name,
            token: JSON.parse(localStorage.getItem('token')),
          },
        })
        .then((response) => {
          resolve(response);
        });
    });
  const getMeasures = () =>
    new Promise((resolve) => {
      axios
        .get('https://musician-tracking-api.herokuapp.com/measures', {
          headers: {
            Authorization: JSON.parse(localStorage.getItem('token')),
          },
        })
        .then((response) => {
          resolve(response);
        });
    });
  const getSkills = () =>
    new Promise((resolve) => {
      axios
        .get('https://musician-tracking-api.herokuapp.com/skills', {
          headers: {
            Authorization: JSON.parse(localStorage.getItem('token')),
          },
        })
        .then((response) => {
          resolve(response);
        });
    });
  const destroySkill = (skillId) =>
    new Promise((resolve) => {
      axios
        .delete(
          `https://musician-tracking-api.herokuapp.com/skills/destroy/${skillId}`
        )
        .then((response) => {
          resolve(response);
        });
    });
  const addMeasure = (skill, score) =>
    new Promise((resolve) => {
      axios
        .post('https://musician-tracking-api.herokuapp.com/measures', {
          measure: {
            id: skill.skill_id,
            newScore: score,
          },
        })
        .then((response) => {
          resolve(response);
        });
    });
  const registration = (email, password, passwordConfirmation) =>
    new Promise((resolve) => {
      axios
        .post('https://musician-tracking-api.herokuapp.com/registrations', {
          user: {
            email,
            password,
            password_confirmation: passwordConfirmation,
          },
        })
        .then((response) => {
          resolve(response);
        });
    });
  const newSession = (email, password) =>
    new Promise((resolve) => {
      axios
        .post('https://musician-tracking-api.herokuapp.com/sessions', {
          user: {
            email,
            password,
          },
        })
        .then((response) => {
          resolve(response);
        });
    });
  const loggedIn = () =>
    new Promise((resolve) => {
      axios
        .get('https://musician-tracking-api.herokuapp.com/logged_in', {
          headers: {
            Authorization: JSON.parse(localStorage.getItem('token')),
          },
        })
        .then((response) => {
          resolve(response);
        });
    });

  return {
    addSkill,
    getMeasures,
    getSkills,
    destroySkill,
    addMeasure,
    registration,
    newSession,
    loggedIn,
  };
})();

export default Api;
