import { Link } from "react-router-dom";
import image from "../assets/Event.png";

const event = () => {
  return (
    <div className="body">
      <div className="event-wrapper">
        <div className="event">
          <div className="event-paragraph">
            <h2 className="event-heading">Birthday Bash</h2>
          </div>
          <div className="event-footer">
            <img
              src={image}
              alt="image"
              className="event-image"
            />
            <Link
              to="/events"
              className="btn btn-1"
            >
              🎉 Create my event{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default event;
