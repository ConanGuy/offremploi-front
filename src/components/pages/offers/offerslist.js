import React, { useEffect, useState } from "react";
import axios from "axios";

import Offer from "./offer";

const OffersList = () => {
  const [offers, setOffers] = useState([]);

  function updateOffers() {
    axios
      .get("http://127.0.0.1:8000/api/offers/?order=-date&lu=false")
      .then((response) => {
        setOffers(response.data);
      })
      .catch((_) => {
        setOffers([]);
      });
  }

  useEffect(() => {
    updateOffers();
  }, []);

  function handleMarkAsRead(id) {
    setOffers((prevOffers) => prevOffers.filter((offer) => offer.id !== id));
  }

  return (
    <div>
      {offers.length === 0 ? (
        <p>No new offer</p>
      ) : (
        offers.map((offer) => {
          return <Offer key={offer.id} data={offer} onMarkAsRead={handleMarkAsRead} />;
        })
      )}
    </div>
  );
};

export default OffersList;
