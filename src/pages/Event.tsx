import { Link } from "react-router-dom";
import image from "../assets/Event.png";
import iconDate from "../assets/Icon-date.png";
import iconLocation from "../assets/Icon-location.png";
import { FaChevronRight } from "react-icons/fa";

const event = () => {
  return (
    <div className="body">
      <div className="event-wrapper">
        <div className="event">
          <div className="event-paragraph">
            <h2 className="event-heading">Birthday Bash</h2>
            <p>Hosted by <span className="event-accent">Elysia</span></p>
            <div className="date">
              <img
                src={iconDate}
                alt="date"
              />
              <div className="event-text">
                <span className="text-1">18 August 6:00PM</span>
                <br />
                to <span className="text-span-1">19 August 1:00PM </span>UTC +
                10
              </div>
              <FaChevronRight
                color="grey"
                cursor={"pointer"}
              />
            </div>
            <div className="location">
              <img
                src={iconLocation}
                alt="date"
              />
              <div className="event-text-2">
                <span className="text-2">Street name</span>
                <br />
                to <span className="text-span">Suburb, State, Postcode</span>
              </div>
              <FaChevronRight
                color="grey"
                cursor={"pointer"}
              />
            </div>
          </div>
          <div className="event-footer">
            <img
              src={image}
              alt="image"
              className="event-image"
            />
          </div>
        </div>
        <Link
          to="/"
          className="btn btn-3"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default event;
