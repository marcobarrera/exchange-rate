import React from "react";
import axios from "axios";
import "./Rates.css";

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
        <div id="container" className="ui container">
          <h1>Currency Converter</h1>
          <div id="converter">
            <div id="inputBox" className="ui right labeled input large">
              <label htmlFor="amount" className="ui label">
                $
              </label>
              <input
                id="fromAmount"
                type="text"
                onKeyUp={this.componentDidMount}
              />
              <div className="ui basic label">.00</div>
            </div>

            <select
              id="from"
              className="ui search selection dropdown large"
              onChange={this.componentDidMount}
            >
              <option value="">Select Currency</option>
              <option value="USD">USD / US Dollar</option>
              <option value="CAD">CAD / Canadian Dollar</option>
              <option value="HKD">HKD / Hong Kong Dollar</option>
              <option value="ISK">ISK / Icelandic Krona</option>
              <option value="PHP">PHP / Philippine Peso</option>
              <option value="DKK">DKK / Danish Krone</option>
              <option value="HUF">HUF / Hungarian Forint</option>
              <option value="CZK">CZK / Czech Koruna</option>
              <option value="AUD">AUD / Australian Dollar</option>
              <option value="RON">RON / Romanian Leu</option>
              <option value="SEK">SEK / Swedish Krona</option>
              <option value="IDR">IDR / Indonesian Rupiah</option>
              <option value="INR">INR / Indian Rupee</option>
              <option value="BRL">BRL / Brazilian Real</option>
              <option value="RUB">RUB / Russian Ruble</option>
              <option value="HRK">HRK / Croatian Kuna</option>
              <option value="JPY">JPY / Japanese Yen</option>
              <option value="THB">THB / Indonesian </option>
              <option value="CHF">CHF / Swiss Franc</option>
              <option value="SGD">SGD / Singapore Dollar</option>
              <option value="PLN">PLN / Poland Zloty</option>
              <option value="BGN">BGN / Bulgarian Lev</option>
              <option value="TRY">TRY / Turkish Lira</option>
              <option value="CNY">CNY / Chinese Yuan</option>
              <option value="NOK">NOK / Norwegian Krone</option>
              <option value="NZD">NZD / New Zealand Dollar</option>
              <option value="ZAR">ZAR / South African Rand</option>
              <option value="MXN">MXN / Mexican Peso</option>
              <option value="ILS">ILS / Israeli New Shekel</option>
              <option value="GBP">GBP / British Pound</option>
              <option value="KRW">KRW / South Korean Won</option>
              <option value="MYR">MYR / Malaysian Ringgit</option>
            </select>
          </div>

          <div id="converter">
            <div id="inputBox" className="ui right labeled input large">
              <label htmlFor="amount" className="ui label">
                $
              </label>
              <input id="toAmount" type="text" />
              <div className="ui basic label">.00</div>
            </div>

            <select
              id="to"
              className="ui search selection dropdown large"
              onChange={this.componentDidMount}
            >
              <option value="">Select Currency</option>
              <option value="CAD">CAD / Canadian Dollar</option>
              <option value="HKD">HKD / Hong Kong Dollar</option>
              <option value="ISK">ISK / Icelandic Krona</option>
              <option value="PHP">PHP / Philippine Peso</option>
              <option value="DKK">DKK / Danish Krone</option>
              <option value="HUF">HUF / Hungarian Forint</option>
              <option value="CZK">CZK / Czech Koruna</option>
              <option value="AUD">AUD / Australian Dollar</option>
              <option value="RON">RON / Romanian Leu</option>
              <option value="SEK">SEK / Swedish Krona</option>
              <option value="IDR">IDR / Indonesian Rupiah</option>
              <option value="INR">INR / Indian Rupee</option>
              <option value="BRL">BRL / Brazilian Real</option>
              <option value="RUB">RUB / Russian Ruble</option>
              <option value="HRK">HRK / Croatian Kuna</option>
              <option value="JPY">JPY / Japanese Yen</option>
              <option value="THB">THB / Indonesian </option>
              <option value="CHF">CHF / Swiss Franc</option>
              <option value="SGD">SGD / Singapore Dollar</option>
              <option value="PLN">PLN / Poland Zloty</option>
              <option value="BGN">BGN / Bulgarian Lev</option>
              <option value="TRY">TRY / Turkish Lira</option>
              <option value="CNY">CNY / Chinese Yuan</option>
              <option value="NOK">NOK / Norwegian Krone</option>
              <option value="NZD">NZD / New Zealand Dollar</option>
              <option value="ZAR">ZAR / South African Rand</option>
              <option value="USD">USD / US Dollar</option>
              <option value="MXN">MXN / Mexican Peso</option>
              <option value="ILS">ILS / Israeli New Shekel</option>
              <option value="GBP">GBP / British Pound</option>
              <option value="KRW">KRW / South Korean Won</option>
              <option value="MYR">MYR / Malaysian Ringgit</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default Rate;
