import React, { useState } from "react";
import { useRef } from "react";

export default function Uref() {
  const [count, setCount] = useState(60);
  let timeId = useRef();

  const handleStart = () => {
    timeId.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timeId.current);
  };
  const handleReset = () => {
    clearInterval(timeId.current);

    setCount(0);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handleReset}>reset</button>
    </>
  );
}
