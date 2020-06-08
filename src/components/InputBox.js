import React from "react";

export const InputBoxFrom = () => {
  return (
    <div id="inputBox" className="ui right labeled input large">
      <label htmlFor="amount" className="ui label">
        $
      </label>
      <input id="fromAmount" type="text" />
      <div className="ui basic label">.00</div>
    </div>
  );
};

export const InputBoxTo = () => {
  return (
    <div id="inputBox" className="ui right labeled input large">
      <label htmlFor="amount" className="ui label">
        $
      </label>
      <input id="toAmount" type="text" />
      <div className="ui basic label">.00</div>
    </div>
  );
};
