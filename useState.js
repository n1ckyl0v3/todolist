import { useState } from "react";

const UseState = () => {
  const [counter, setCounter] = useState(1);

  const handleIncrease = () => {
    setCounter(counter + 1);
  };

  const handleDisincrease = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="usestate">
      <h1>{counter}</h1>
      <button type="" onClick={handleIncrease}>
        Increase
      </button>
      <button onClick={handleDisincrease}>Disincrease</button>
    </div>
  );
};

export default UseState;
