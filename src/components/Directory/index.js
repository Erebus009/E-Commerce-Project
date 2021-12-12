import React from "react";
import "./style.scss";
import Dirtbike from "./../../assets/dirtbike.jpg";
import OffRoad from "./../../assets/offroad.jpg";

const Directory = (props) => {
  return (
    <div className="direct">
      <div className="wrapper">
        <div
          className="item"
          style={{
            backgroundImage: `url(${Dirtbike})`,
          }}
        >
          <a href="dirtbikes">Shop DirtBikes</a>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${OffRoad})`,
          }}
        >
          <a href="offroads">Shop OffRoad</a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
