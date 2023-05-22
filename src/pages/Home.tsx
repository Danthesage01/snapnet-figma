import React from "react";
import image from "../assets/image.png";

const Home = () => {
  return (
    <div className="div-wrapper">
      <div className="home">
        <div className="home-paragraph">
          <h2 className="same-heading">Image If</h2>
          <h2 className="unique-heading">Snapchat</h2>
          <h2 className="same-heading">had events</h2>
          <p className="home-text">
            Easily host and share events with your friends across any social
            media
          </p>
          <button className="btn btn-2">🎉 Create my event </button>
        </div>
        <img
          src={image}
          alt="image"
          className="home-image"
        />
        <button className="btn btn-1">🎉 Create my event </button>
      </div>
    </div>
  );
};

export default Home;
