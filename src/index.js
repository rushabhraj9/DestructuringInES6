// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";
const [Honda, Tesla] = cars;
console.log(Honda);
const {
  coloursByPopularity: [HondaTopColor]
} = Honda;
const {
  coloursByPopularity: [teslaTopColor]
} = Tesla;
const {
  speedStats: { topSpeed: HondaTopSpeed }
} = Honda;
const {
  speedStats: { topSpeed: TeslaTopSpeed }
} = Tesla;
ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>TopColor</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{Honda.model}</td>
      <td>{HondaTopColor}</td>
      <td>{HondaTopSpeed}</td>
    </tr>
    <tr>
      <td>{Tesla.model}</td>
      <td>{teslaTopColor}</td>
      <td>{TeslaTopSpeed}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
