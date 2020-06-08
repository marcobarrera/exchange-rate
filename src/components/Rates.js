import React from "react";
import axios from "axios";
import { Currencies } from "./Currencies";
import { InputBoxFrom, InputBoxTo } from "./InputBox";
import "./Rates.css";

class Rate extends React.Component {
  state = {
    exrates: [],
  };

  exchange() {
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;

    axios
      .get("https://api.exchangeratesapi.io/latest?symbols=" + from + "," + to)
      .then((res) => {
        const exrates = res.data.rates;
        var oneUnit = exrates[to] / exrates[from];
        var amt = document.getElementById("fromAmount").value;
        document.getElementById("toAmount").value = oneUnit * amt;
      });
  }

  render() {
    return (
      <div id="container" className="ui container">
        <h1>Currency Converter</h1>

        <InputBoxFrom />
        <select id="from" className="ui search selection dropdown large">
          <Currencies />
        </select>

        <InputBoxTo />
        <select
          onChange={this.exchange}
          id="to"
          className="ui search selection dropdown large"
        >
          <Currencies />
        </select>
      </div>
    );
  }
}

export default Rate;
