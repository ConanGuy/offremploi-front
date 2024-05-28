import React from "react";
import OffersList from "./offerslist";

class Main extends React.Component {
  render() {
    return (
      <>
        <div>
          <h1>Offers</h1>
          <p>Check out our latest offers</p>
        </div>
        <OffersList />
      </>
    );
  }
}

export default Main;
