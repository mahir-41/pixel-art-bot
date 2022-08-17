import React from "react";
import { useState } from "react";
import axios from "axios";

const Home = () => {
  const [url, setUrl] = useState("");
  const [response, setResponse] = useState("");
  const [hash, setHash] = useState(Date.now())

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  async function onGenerate() {
    setResponse("waiting...");
    axios({
      method: "get",
      url: `https://pyxapi.herokuapp.com/pixelate?url=${url}`,
    }).then(function () {
      setResponse("done");
      setHash(Date.now());
    });
  }

  return (
    <>
      <h1>Pixel Art Bot</h1>
      <img width="20%" src={url} />
      <br></br>
      <label>Search URL </label>
      <input value={url} onChange={(e) => handleUrlChange(e)}></input>
      <br></br>
      <br></br>
      <button onClick={onGenerate}>Generate</button>
      <p>{response}</p>
      {response == "done" ? (
        <img src={`https://pyxapi.herokuapp.com/getImage?${hash}`}/>
      ) : null}
    </>
  );
};

export default Home;
