import React from "react";

function Stock({ stock }) {
  const boughtHandler = () => {
    console.log(stock.id);
    fetch(`http://localhost:3001/stocks/${stock.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bought: !stock.bought }),
    })
      .then((r) => r.json())
      .then((stock) => {
        console.log(stock);
      });
  };

  return (
    <div>
      <div className="card" onClick={boughtHandler}>
        <div className="card-body" id={stock.id}>
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
