function Card({ title, location, googleMapsUrl, startDate, endDate, description, imageUrl }) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={imageUrl} alt="profile" />
      </div>

      <div className="card-info">
        <div className="card-location">
          {location}
          <a href={googleMapsUrl}>View on Google Maps</a>
        </div>
        {title}
        <h6>{startDate} - {endDate}</h6>
        {description}
      </div>
    </div>
  );
}

export default Card;
