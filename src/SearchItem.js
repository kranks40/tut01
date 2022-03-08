import React from "react";
// import { FaSearch } from "react-icons/fa";

const SearchItem = ({ search, setSearch }) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search</label>
      <input
        role="search"
        type="text"
        placeholder="Search Item"
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* <FaSearch className="searchbtn" /> */}
    </form>
  );
};

export default SearchItem;
