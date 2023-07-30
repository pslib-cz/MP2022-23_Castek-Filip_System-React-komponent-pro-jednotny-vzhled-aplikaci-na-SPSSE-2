// Search inside field
/* Usage
<Search>
  {[
    'apple',
    'banana',
    'orange',
    'pear',
    'grape',
    // Add more data items here as needed
  ]}
</Search>
*/
import React, { useState } from 'react';
import './Search.css';

const Search = ({ children }) => {
  const sampleData = ['apple', 'banana', 'orange', 'pear'];
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(children || sampleData);

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    setSearchText(searchTerm);
    const filteredResults = (children || sampleData).filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredResults);
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          value={searchText}
          onChange={handleSearchChange}
          placeholder="search"
        />
        <span className="search-icon">&#128269;</span>
      </div>
      <div>
        {filteredData.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </>
  );
};

export default Search;