import React, { useEffect, useState } from "react";
import "./ProfilePage.css";
import { GetUsers } from "../../apis/api";
import ProfileCard from "../Card/Card";

const ProfilePage = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const getUsers = async () => {
    try {
      const response = await GetUsers();
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleInputChange = (event) => {
    event.preventDefault();
    const results = users.filter((user) =>
      user.name.includes(event.target.value)
    );
    setFilteredResults(results);
    setSearchQuery(event.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const results = users.filter((user) => user.name.includes(searchQuery));
    setFilteredResults(results);
  };

  return (
    <div className="container">
      <div className="searchcontainer">
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <button
            onClick={(e) => handleSearch(e)}
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      <div className="row">
        {filteredResults.length === 0
          ? users.map((val, index) => (
              <ProfileCard
                key={index}
                name={val.name}
                phone={val.phone}
                picture={val.picture}
                balance={val.balance}
                id={val._id}
              />
            ))
          : filteredResults.map((val, index) => (
              <ProfileCard
                key={index}
                name={val.name}
                phone={val.phone}
                picture={val.picture}
                balance={val.balance}
                id={val._id}
              />
            ))}
      </div>
    </div>
  );
};

export default ProfilePage;
