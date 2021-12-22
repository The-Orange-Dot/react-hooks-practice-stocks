import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ stocks }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {stocks.map((stock, index) => {
        return stock.bought ? (
          <Stock stock={stock} key={stock.id} id={index} />
        ) : null;
      })}
    </div>
  );
}

export default PortfolioContainer;
