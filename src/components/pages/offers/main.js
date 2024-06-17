import React from "react";
import OffersList from "./offerslist";

class Main extends React.Component {
  render() {
    return (
      <>
        <div style={{fontFamily: 'Arial'}}>
          <h1>Offers</h1>
          <p>Check out the latest offers</p>
        </div>
        <OffersList />
      </>
    );
  }
}

export default Main;
