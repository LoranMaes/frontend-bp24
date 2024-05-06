import React from "react";

export default function Button({ clickHandler }: any) {
  // Example emitting event to parent component
  return <button onClick={clickHandler}>Button</button>;
}
