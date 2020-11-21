import React from "react";
import "./style.css";

console.log("Hey I'm here!!!");

export function MyComponent() {
  return (
    <div className="container">
      <div>
        <h1>Hey, welcome to my humble webpack template! 🙃</h1>
        <p>Hala Q.</p>
      </div>
    </div>
  );
}

export function print(text) {
  console.log("text is: ", text);
}

export default {
  MyComponent: MyComponent,
  print: print,
};
