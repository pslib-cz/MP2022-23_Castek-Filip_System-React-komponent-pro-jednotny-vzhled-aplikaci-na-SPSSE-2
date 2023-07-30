import React, { useState } from 'react';
import './DatePicker.css';

const DatePicker = () => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const isDayValid = day >= 1 && day <= 31;
  const isMonthValid = month >= 1 && month <= 12;
  const isYearValid = year >= 1900 && year <= 2100;

  return (
    <div className="date-picker-container">
      <div className={`input-box ${isDayValid ? '' : 'invalid'}`}>
        <input
          type="text"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          placeholder="DD"
        />
      </div>
      <div className={`input-box ${isMonthValid ? '' : 'invalid'}`}>
        <input
          type="text"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          placeholder="MM"
        />
      </div>
      <div className={`input-box ${isYearValid ? '' : 'invalid'}`}>
        <input
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="YYYY"
        />
      </div>
    </div>
  );
};

export default DatePicker;
