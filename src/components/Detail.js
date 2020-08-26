import React from 'react';

const Detail = () => {
  const handleClick = () => {};
  const { skillName } = this.props.location.state;
  return (
    <div>
      <h1>{skillName}</h1>
      <ul>
        <li>
          <button type="button" onClick={() => handleClick()}>
            Add Track
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Detail;
