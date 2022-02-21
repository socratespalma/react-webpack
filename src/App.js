import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState([]);

  const handleClick = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setValue((prevValue) => prevValue.concat(counter));
  };

  return (
    <div>
      <h1>Hello world</h1>
      <button onClick={handleClick}>Press This</button>
      <div>{counter}</div>
    </div>
  );
}
