import React from "react";

export default function Header(props) {
  const darkk = {
    backgroundColor: props.darkMode ? "black" : "#9092d1",
    color: props.darkMode ? "white" : "black",
  };

  return (
    <div id="header" style={darkk}>
      <div id="hc1">
        <img
          src="https://www.pinclipart.com/picdir/big/73-733173_own-creation-funny-face-logo-meme-mania-clipart.png"
          alt=""
        />
        <h1>Meme Generator</h1>
      </div>

      <div id="toggle-fog">
        <div
          className={props.darkMode ? "toggle-con-black" : "toggle-con-white"}
          onClick={props.Click}
        >
          <div id="ball"></div>
        </div>
      </div>
    </div>
  );
}
