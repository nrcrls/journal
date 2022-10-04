import { FaMapMarkerAlt } from 'react-icons/fa';

function Card({ title, location, googleMapsUrl, startDate, endDate, description, imageUrl }) {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-left">
          <img src={imageUrl} className="card-img" alt="profile" />
        </div>

        <div className="card-right">
          <div className="card-location">
            <div className="location-info">
              <FaMapMarkerAlt className='location-icon' />
              <p className="location-name">{location}</p>
            </div>
            <a href={googleMapsUrl}>View on Google Maps</a>
          </div>
          <h3 className="article-title">{title}</h3>
          <p className="article-date"><span className="bold">{startDate} - {endDate}</span></p>
          <p className="article-desc">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
