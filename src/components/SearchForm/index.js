import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function SearchForm() {
  const navigate = useNavigate();
  const [txtSearch, setTxtSearch] = useState('');

  const handleChange = (event) => {
    setTxtSearch(event.currentTarget.value);
  };
  const handleKeyPress = (event) => {
    if (event.charCode === 13) {
      handleSearch();
    }
  };

  const handleSearch = () => navigate(`?txtSearch=${txtSearch}`);

  return (
    <div className="d-flex">
      <input
        className="form-control me-2"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        value={txtSearch}
        type="text"
        placeholder="search"
      />
      <Button onClick={handleSearch} variant="outline-light">
        Search
      </Button>
    </div>
  );
}

export default SearchForm;
