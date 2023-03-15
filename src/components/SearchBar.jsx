import React from 'react';

const SearchBar = (props) => {
  const {searchGifs} = props;
  const handleChange = (event) => {
    searchGifs(event.currentTarget.value);
  };

  return (
    <div>
      <input className="form-search form-control" type="text" placeholder="Search a gif" onChange={handleChange} />
    </div>
  );
};

export default SearchBar;
