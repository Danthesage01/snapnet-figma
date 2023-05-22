import React from "react";
import image from "../assets/image.png";

const Home = () => {
  return (
    <div className="div-wrapper">
      <div className="home">
        <div className="home-text">
          <h4>Image If</h4>
          <h4>Snapchat</h4>
          <h4>had events</h4>
          <p>
            Easily host and share events with your friends across any social
            media
          </p>
          <button className="btn btn-2">🎉 Create my event </button>
        </div>
        <img
          src={image}
          alt="image"
          className="image"
        />
        <button className="btn btn-1">🎉 Create my event </button>
      </div>
    </div>
  );
};

export default Home;
