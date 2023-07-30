// Grid.js
import React from 'react';
import './Grid.css';

const Grid = ({ rows, columns, rowGap, columnGap, borders, children }) => {
  const containerStyle = {
    display: 'grid',
    gridTemplateRows: Array.isArray(rows) ? rows.join(' ') : '1fr',
    gridTemplateColumns: Array.isArray(columns) ? columns.join(' ') : '1fr',
    gridGap: `${rowGap}px ${columnGap}px`,
    border: borders === 'solid' ? '1px solid black' : 'none',
  };

  return (
    <div className="grid" style={containerStyle}>
      {React.Children.map(children, (child, index) => (
        <div style={child.props.style}>{child}</div>
      ))}
    </div>
  );
};

export default Grid;
