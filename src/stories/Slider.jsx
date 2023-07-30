/*
    komponenty - formulářové prvky - posuvník
*/
import React from 'react';
import PropTypes from 'prop-types';

const Slider = ({ min, max }) => {
  const [value, setValue] = React.useState(min);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div style={{ width: '80%', margin: 'auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>{min}</span>
        <span>{max}</span>
      </div>
      <input
        type="range"
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
        style={{ width: '100%', height: '24px' }}
      />
      <div style={{ textAlign: 'center', marginTop: '8px' }}>{value}</div>
    </div>
  );
};

Slider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

export default Slider;
