import logo from "./logo.svg";
import "./App.css";
import { FaStar } from "react-icons/fa";
import React, { useState, useReducer, createContext } from "react";
import { useInput } from "./useInput";

function App() {
  // practicing useInput
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");
  function submit(e) {
    e.preventDefault();
    alert(`${titleProps.value} sounds like ${colorProps.value}`);
    resetTitle();
    resetColor();
  }
  // ENd of USE input
  const initialState = {
    message: "Hei",
  };
  function reducer(state, action) {
    switch (action.type) {
      case "yell":
        return {
          message: `HEY I JUST SAID ${state.message}!`,
        };
      case "whisper":
        return {
          message: `i said ${state.message}!`,
        };
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  const createArray = (length) => [...Array(length)];
  console.log(createArray);
  function Star({ selected = false, onSelect }) {
    return <FaStar color={selected ? "yellow" : "gray"} onClick={onSelect} />;
  }
  function StarRating({ starNum = 5 }) {
    const [selectedStars, setSelectedStars] = useState(0);
    return (
      <>
        {createArray(starNum).map((item, id) => (
          <Star
            key={id}
            starNum={starNum}
            selected={selectedStars > id}
            onSelect={() => setSelectedStars(id + 1)}
          />
        ))}
        ;
        <p>
          {selectedStars} of {starNum}
        </p>
      </>
    );
  }

  return (
    <div className="App">
      <StarRating starNum={7} />
      <h1>message: {state.message}</h1>
      <button onClick={() => dispatch({ type: "yell" })}>YELL</button>
      <button onClick={() => dispatch({ type: "whisper" })}>whipser</button>
      <h1> Practicing some useInput</h1>
      <form onSubmit={submit}>
        <input type="text" {...titleProps} placeholder="Sound...." />
        <input {...colorProps} type="color" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
