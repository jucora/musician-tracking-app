import React from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

class Progress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: [],
        datasets: [
          {
            label: 'Progress',
            backgroundColor: 'rgba(0, 255, 0, 0.75)',
            data: null,
          },
        ],
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

        console.log('values are', values);
        this.setState({
          data: { labels: skills },
          data: { datasets: [{ label: 'Your Progress', data: values }] },
        });
      })
      .catch((error) => {
        console.error('error', error);
      });
  }
  render() {
    return (
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
    );
  }
}

export default Progress;
