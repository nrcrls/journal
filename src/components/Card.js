import { FaMapMarkerAlt } from 'react-icons/fa';

function Card(props) {

  return (
    <div className="card-container">
      <div className="card">
        <div className="card-left">
          <img src={props.imageUrl} className="card-img" alt="profile" />
        </div>

        <div className="card-right">
          <div className="card-location">
            <div className="location-info">
              <FaMapMarkerAlt className='location-icon' />
              <p className="location-name">{props.location}</p>
            </div>
            <a href={props.googleMapsUrl}>View on Google Maps</a>
          </div>
          <h3 className="article-title">{props.title}</h3>
          <p className="article-date"><span className="bold">{props.startDate} - {props.endDate}</span></p>
          <p className="article-desc">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
