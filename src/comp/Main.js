import React, { useState, useEffect } from "react";

export default function Main(props) {
  const [alldata, setallData] = useState();
  const [changingData, setChangingData] = useState();

  const [main, setmain] = useState({
    img: "https://cdn.vox-cdn.com/thumbor/7yYZtRB4jIeG_517GXEcycJ2C3U=/0x0:735x500/1200x800/filters:focal(310x192:426x308)/cdn.vox-cdn.com/uploads/chorus_image/image/66727168/image.0.png",
    topText: "",
    bottomText: "",
    cimage: "https://cdn.kapwing.com/collections/One-Does-Not-Simply-m1zju.jpg",
  });

  useEffect(() => {
    fetch("https://meme-api.herokuapp.com/gimme")
      .then((ctj) => ctj.json())
      .then((value) => setallData(value));
  }, [main]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((ctj) => ctj.json())
      .then((value) => setChangingData(value.data.memes));
  }, []);

  function getMeme() {
    alradySetMeme();
    getChangeMeme();
  }

  function alradySetMeme() {
    const jokeImg = alldata.url;

    setmain((previusValue) => {
      return {
        ...previusValue,
        img: jokeImg,
      };
    });
  }

  function getChangeMeme() {
    const randomNum = Math.floor(Math.random() * changingData.length);

    setmain((pdata) => {
      return {
        ...pdata,
        cimage: changingData[randomNum].url,
      };
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setmain((pvalue) => {
      return { ...pvalue, [name]: value };
    });
  }

  const back = {
    backgroundColor: props.darkMode ? "#404040" : "#c1c1d4",
    color: props.darkMode ? "white" : "black",
  };

  return (
    <div id="main-con" style={back}>
      {console.log("hello")}
      <div id="for-button">
        <form>
          <input
            className="input"
            onChange={handleChange}
            type="text"
            placeholder="type meme text"
            name="topText"
            value={main.topText}
          />
          <input
            className="input"
            onChange={handleChange}
            type="text"
            placeholder="type meme text"
            name="bottomText"
            value={main.bottomText}
          />
        </form>
        <button id="meme-but" onClick={getMeme}>
          Get Meme
        </button>
      </div>

      <div id="for-image">
        <div id="ci">
          <h1>Some tips</h1>
          <img alt="" src={main.img} />
        </div>
        <div id="nci">
          <h1 className="font" id="topt">
            {main.topText}
          </h1>

          <img id="sss" src={main.cimage} alt="" />
          <h1 className="font" id="bottomte">
            {main.bottomText}
          </h1>
        </div>
      </div>
    </div>
  );
}
