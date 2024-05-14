import React, { useReducer } from "react";
const redecer = (state, action) => {
  switch (action) {
    case "up":
      return state + 1;
    case "down":
      return state - 1;

    default:
      throw new Error("acttion khong hop le");
  }
};
export default function Reduce() {
  const [number, dispath] = useReducer(redecer, 0);

  return (
    <>
      {console.log(number)}
      <h1>{number}</h1>
      <button onClick={() => dispath("up")}>up</button>
      <button onClick={() => dispath("down")}>down</button>
    </>
  );
}
