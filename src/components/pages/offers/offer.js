import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

const Offer = ({ data, onMarkAsRead }) => {
  const [offerData] = useState(data);

  function handleLinkClick() {
    axios.patch(`${process.env.REACT_APP_API_URL}/offers/${offerData.id}/read/`);
  }

  function handleMarkAsRead() {
    axios.patch(`${process.env.REACT_APP_API_URL}/offers/${offerData.id}/read/`).then(() => {
      onMarkAsRead(offerData.id);
    });
  }

  return (
    <div className="offer-item">
      <div className="offer-item-header">
        <p className="offer-item-group">{offerData.offer_group.name}</p>
        <button className="offer-item-close" onClick={handleMarkAsRead}>✖</button>
      </div>
      
      <div className="offer-item-title">
        <a
          href={offerData.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
        >
          {offerData.title}
        </a>
      </div>

      <div className="offer-item-data">
        <div className="offer-item-data-element offer-item-data-title">
          <img
            className="offer-item-data-icon"
            src="site_icon.png"
            alt={offerData.site.name}
          />
          {offerData.site.name}
        </div>
        <div className="offer-item-data-element offer-item-data-location">
          <img
            className="offer-item-data-icon"
            src="location_icon.png"
            alt={offerData.site.name}
          />
          {offerData.location}
        </div>
        <div className="offer-item-data-element offer-item-data-date">
          <img
            className="offer-item-data-icon"
            src="date_icon.png"
            alt={offerData.site.name}
          />
          {offerData.date_insertion}
        </div>
      </div>
    </div>
  );
};

export default Offer;
