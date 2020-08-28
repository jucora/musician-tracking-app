import React from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

class Progress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: [],
        datasets: [{}],
      },
    };
  }
  componentDidMount() {
    axios
      .get('http://localhost:3001/skills', { withCredentials: true })
      .then((response) => {
        let skills = [];
        let values = [];

        response.data.currentSkills.map((skill) => {
          skills.push(skill.name);
          values.push(skill.sum);
        });
        this.setState({
          data: {
            labels: skills,
            datasets: [
              {
                label: 'Your Progress',
                data: values,
                backgroundColor: '#ADDC91',
              },
            ],
          },
        });
      })
      .catch((error) => {
        console.error('error', error);
      });
  }
  render() {
    const { loggedInStatus, history } = this.props;
    return loggedInStatus === 'LOGGED_IN' ? (
      <div
        style={{
          position: 'relative',
          width: '60%',
          height: 'auto',
          margin: 'auto',
        }}
      >
        <Line
          options={{
            responsive: true,
          }}
          data={this.state.data}
        />
      </div>
    ) : (
      (history.push('/'), true)
    );
  }
}

export default Progress;
