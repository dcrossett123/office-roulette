import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import "../css/Header.css";

const Header = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <Jumbotron>
            <h1>Office Roulette</h1>
            <p>Perfect for that Office binge with friends!</p>
            <p></p>
          </Jumbotron>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default Header;
