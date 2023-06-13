import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { GetUserProfile } from "../../apis/api";
import { FaArrowLeft } from "react-icons/fa";
import "./ProfileDetailsPage.css";

const ProfileDetailPage = () => {
  const location = useLocation();
  const [user, setUser] = useState("");
  const [friends, setFriends] = useState([]);
  const [tags, setTags] = useState([]);
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  const getuserProfile = async () => {
    try {
      const response = await GetUserProfile(id);
      setUser(response.data);
      setFriends(response.data.friends);
      setTags(response.data.tags);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getuserProfile();
  }, [id]);

  return (
    <div className="container">
      <div className="backarrowContainer">
        <FaArrowLeft style={{ marginTop: "5px" }} />
        <NavLink
          to="/profile"
          style={{ marginLeft: "20px", textDecoration: "none", color: "black" }}
        >
          Back
        </NavLink>
      </div>
      <div className="row" style={{ marginBottom: "100px" }}>
        <div className="col-sm-4">
          <div className="leftsideContent">
            <div className="profile-image-container">
              <img className="profileImage" alt="profile" src={user.picture} />
            </div>
            <div className="content">
              <p className="titleName">{user.name}</p>
              <p className="subtitle">{user.company}</p>
              <p style={{ color: "maroon" }}>{user.email}</p>
              <p style={{ color: "darkgreen" }}>{user.phone}</p>
              <div style={{ marginTop: "20px", textAlign: "left" }}>
                <b style={{ color: "maroon" }}>Gender</b>
                <p>{user.gender}</p>
                <b style={{ color: "maroon" }}>Address</b>
                <p>{user.address}</p>
                <b style={{ color: "maroon" }}>Age</b>
                <p>{user.age}</p>
                <b style={{ color: "maroon" }}>Eye Color</b>
                <p>{user.eyeColor}</p>
                <b style={{ color: "maroon" }}>Favourite Fruit</b>
                <p>{user.favoriteFruit}</p>
                <b style={{ color: "maroon" }}>Registered On</b>
                <p>{user.registered}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-8">
          <div className="rightSideContent">
            <div className="priceRangesContainer">
              <p className="sectiontitle">Balance</p>
              <p className="price">{user.balance}</p>
            </div>
            <div className="aboutcontainer">
              <p className="sectiontitle" style={{ marginTop: "40px" }}>
                About Me
              </p>
              <p className="abouttext">{user.about}</p>
            </div>
            <div className="reviewsContainer">
              <p className="sectiontitle" style={{ marginTop: "40px" }}>
                Friends
              </p>
              <div className="commentContainer">
                {friends.map((val, index) => (
                  <div className="comment" key={index}>
                    <p>{val.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="reviewsContainer">
              <p className="sectiontitle" style={{ marginTop: "40px" }}>
                Tags
              </p>
              <div className="container">
                <div className="row tagsContainer">
                  {tags.map((val, index) => (
                    <div className="col-xs-4 col-sm-4 col-md-6 col-lg-3">
                      <div className="tag">
                        <p>{val}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetailPage;
