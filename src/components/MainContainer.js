import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const API = "http://localhost:3001/stocks";
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((stocks) => setStocks(stocks));
  }, []);

  const typeFilter = (event) => {
    fetch(API)
      .then((r) => r.json())
      .then((stocks) => {
        const filtered = stocks.filter((stock) => {
          return event.target.value === stock.type;
        });
        return setStocks(filtered);
      });
  };

  const sortHandler = (event) => {
    fetch(API)
      .then((r) => r.json())
      .then((stocks) => {
        let sortedStocks;
        if (event.target.value === "Alphabetically") {
          sortedStocks = stocks.sort((a, b) => {
            return a.name > b.name ? 1 : -1;
          });
        } else {
          sortedStocks = stocks.sort((a, b) => {
            return a.price > b.price ? 1 : -1;
          });
        }
        return setStocks(sortedStocks);
      });
  };

  return (
    <div>
      <SearchBar typeFilter={typeFilter} sortHandler={sortHandler} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} setStocks={typeFilter} />
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={stocks} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
