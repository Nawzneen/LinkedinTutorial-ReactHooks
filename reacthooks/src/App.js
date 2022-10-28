import logo from "./logo.svg";
import "./App.css";
import { FaStar } from "react-icons/fa";
import { useState, useReducer } from "react";

function App() {
  const initialState = {
    message: "Hei",
  };
  function reducer(state, action) {
    switch (action.type) {
      case "yell":
        return {
          message: "HEY!",
        };
      case "whisper":
        return {
          message: "sorry for shouting",
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
    </div>
  );
}

export default App;
