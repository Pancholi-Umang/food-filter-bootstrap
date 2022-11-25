import React, { useState } from "react";
import Item from "./Items";
import "./Navbar.css";

const Allover = () => {
  const [data, setData] = useState(Item);

  const handleClick = (btnProps) => {
    const result = Item.filter((val) => {
      return val.category === btnProps;
    });
    console.log(data);
    setData(result);
  };
  return (
    <div className="container mt-5 ">
      <div className="text-center">
        <button className="btn btn-warning mx-2" onClick={() => setData(Item)}>
          Home
        </button>
        <button
          className="btn btn-warning mx-2"
          onClick={() => handleClick("breakfast")}
        >
          Breakfast
        </button>
        <button
          className="btn btn-warning mx-2"
          onClick={() => handleClick("dinner")}
        >
          Dinner
        </button>
        <button
          className="btn btn-warning mx-2"
          onClick={() => handleClick("evening")}
        >
          Evening
        </button>
        <button
          className="btn btn-warning mx-2"
          onClick={() => handleClick("lunch")}
        >
          Lunch
        </button>
      </div>

      <div className="row">
        {data.map((value, index) => {
          return (
            <div className="col-md-4 card g-5" key={index}>
              <img className="img" src={value.imag} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{value.name}</h5>
                <p className="card-text">{value.description}</p>
                <p className="card-text">{value.category}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Allover;
