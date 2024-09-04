import React, { useState, useEffect, useRef, memo } from "react";
import "./App.css";
import PropTypes from "prop-types";

function Content({ showContent }) {
  if (!showContent) {
    return null;
  }
  return <div>Заполняется...</div>;
}

function App() {
  const [show, setShow] = useState(false);
  const [upSeconds, setUpSeconds] = useState(new Date().getSeconds());
  function UpdateSeconds({ seconds }) {
    return <div>{seconds}</div>;
  }
  useEffect(() => {
    const intervalSec = setInterval(() => {
      setUpSeconds(new Date().getSeconds());
    }, 1000);
    return () => {
      clearInterval(intervalSec);
    };
  });

  return (
    <div className="App">
      <p
        style={{
          backgroundColor: "green",
        }}
      >
        <Content showContent={show} />
      </p>
      <label htmlFor="inputValue">Введите текст</label>
      <input
        type="text"
        name="inputValue"
        id="inputValue"
        onChange={(e) => {
          setShow(e.target.value !== "");
        }}
      />

      <UpdateSeconds seconds={upSeconds} />
    </div>
  );
}

export default App;
