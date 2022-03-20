import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';

const Search = () => {
  const data = useSelector((state) => state.product.data);
  const [filterData, setFilterData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.dsc.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilterData([]);
    } else {
      setFilterData(newFilter);
    }
  };
  const clearInput = () => {
    setFilterData([]);
    setWordEntered("");
  };

  return (
    <div className="search-section">
      <input
        type="text"
        value={wordEntered}
        placeholder="Food, groceries, drinks, etc..."
        className="searchInput"
        onChange={handleFilter}
      />
      {filterData.length === 0 ? (
        <FaSearch className="fa" />
      ) : (
        <FaSearch onClick={clearInput} className="fa"/>
      )}
      {filterData.length !== 0 && (
        <div className="searchlist">
          {filterData.slice(0, 10).map((item) => {
            return (
              <p>
                <Link
                  to={`/menu/${item.id}`}
                  className="searchterm"
                  key={item.id}
                >
                  {" "}
                  {item.name}
                </Link>
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Search;
