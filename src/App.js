import React from "react";
// import Onboard from 'bnc-onboard'
import Web3 from "web3"
function Input() {
  return (
      <div className="custom-search">
        <input
        className="custom-mint-input draw"
           placeholder="enter a number between 1 and 15"
      />
  <button id="btn-connect" className="custom-mint-button "  type="submit">
    Mint Token
  </button>
</div>
  );
}

export default Input;
