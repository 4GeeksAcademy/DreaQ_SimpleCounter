//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import ".././styles/index.css";

//import your own components
import Home from "./component/home.jsx";

import PropTypes from "prop-types";

function SimpleCounter(PropTypes) {
  return (
    <div className="bigCounter">
      <div className="calendar">
        <i className="far fa-clock"></i>
      </div>
      <div className="four">{PropTypes.digitFour}</div>
      <div className="three">{PropTypes.digitThree}</div>
      <div className="two">{PropTypes.digitTwo}</div>
      <div className="one">{PropTypes.digitOne}</div>
    </div>
  );
}

SimpleCounter.propTypes = {
  digitFour: PropTypes.number,
  digitThree: PropTypes.number,
  digitTwo: PropTypes.number,
  digitOne: PropTypes.number,
};

let counter = 0;
let four;
let three;
let two;
let one;

setInterval(function () {
  four = Math.floor(counter / 1000);
  three = Math.floor(counter / 100);
  two = Math.floor(counter / 10);
  one = Math.floor(counter / 1);
  console.log(four, three, two, one);

  counter++;
  ReactDOM.render(
    <SimpleCounter
      digitOne={one}
      digitTwo={two}
      digitThree={three}
      digitFour={four}
    />,
    document.querySelector("#app")
  );
}, 1000);
