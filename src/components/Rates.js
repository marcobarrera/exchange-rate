import React from "react";
import axios from "axios";

class Rate extends React.Component {
  state = {
    exrates: [],
  };

  componentDidMount() {
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
      <div>
        <input id="fromAmount" type="text" onKeyUp={this.componentDidMount} />

        <select
          id="from"
          className="ui dropdown"
          onChange={this.componentDidMount}
        >
          <option value="CAD">CAD</option>
          <option value="HKD">HKD</option>
          <option value="ISK">ISK</option>
          <option value="PHP">PHP</option>
          <option value="DKK">DKK</option>
          <option value="HUF">HUF</option>
          <option value="CZK">CZK</option>
          <option value="AUD">AUD</option>
          <option value="RON">RON</option>
          <option value="SEK">SEK</option>
          <option value="IDR">IDR</option>
          <option value="INR">INR</option>
          <option value="BRL">BRL</option>
          <option value="RUB">RUB</option>
          <option value="HRK">HRK</option>
          <option value="JPY">JPY</option>
          <option value="THB">THB</option>
          <option value="CHF">CHF</option>
          <option value="SGD">SGD</option>
          <option value="PLN">PLN</option>
          <option value="BGN">BGN</option>
          <option value="TRY">TRY</option>
          <option value="CNY">CNY</option>
          <option value="NOK">NOK</option>
          <option value="NZD">NZD</option>
          <option value="ZAR">ZAR</option>
          <option value="USD" selected>
            USD
          </option>
          <option value="MXN">MXN</option>
          <option value="ILS">ILS</option>
          <option value="GBP">GBP</option>
          <option value="KRW">KRW</option>
          <option value="MYR">MYR</option>
        </select>

        <input id="toAmount" type="text" />

        <select
          id="to"
          className="ui dropdown"
          onChange={this.componentDidMount}
        >
          <option value="CAD" selected>
            CAD
          </option>
          <option value="HKD">HKD</option>
          <option value="ISK">ISK</option>
          <option value="PHP">PHP</option>
          <option value="DKK">DKK</option>
          <option value="HUF">HUF</option>
          <option value="CZK">CZK</option>
          <option value="AUD">AUD</option>
          <option value="RON">RON</option>
          <option value="SEK">SEK</option>
          <option value="IDR">IDR</option>
          <option value="INR">INR</option>
          <option value="BRL">BRL</option>
          <option value="RUB">RUB</option>
          <option value="HRK">HRK</option>
          <option value="JPY">JPY</option>
          <option value="THB">THB</option>
          <option value="CHF">CHF</option>
          <option value="SGD">SGD</option>
          <option value="PLN">PLN</option>
          <option value="BGN">BGN</option>
          <option value="TRY">TRY</option>
          <option value="CNY">CNY</option>
          <option value="NOK">NOK</option>
          <option value="NZD">NZD</option>
          <option value="ZAR">ZAR</option>
          <option value="USD">USD</option>
          <option value="MXN">MXN</option>
          <option value="ILS">ILS</option>
          <option value="GBP">GBP</option>
          <option value="KRW">KRW</option>
          <option value="MYR">MYR</option>
        </select>
      </div>
    );
  }
}

export default Rate;
