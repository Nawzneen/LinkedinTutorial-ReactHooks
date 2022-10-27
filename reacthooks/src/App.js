import logo from "./logo.svg";
import "./App.css";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

function App() {
  const createArray = (length) => [...Array(length)];
  console.log(createArray);
  function Star({ selected = false, onSelect }) {
    return <FaStar color={selected ? "yellow" : "gray"} onClick={onSelect} />;
  }
  function StarRating({ starNum = 5 }) {
    const [selectedStars, setSelectedStars] = useState(0);
    return createArray(starNum).map((item, id) => (
      <Star
        key={id}
        starNum={starNum}
        selected={selectedStars > id}
        onSelect={() => setSelectedStars(id + 1)}
      />
    ));
  }

  return (
    <div className="App">
      <StarRating starNum={5} />
    </div>
  );
}

export default App;
