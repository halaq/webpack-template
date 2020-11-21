import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

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

export function MyComponentDOM(id) {
  ReactDOM.render(<MyComponent />, document.getElementById(id));
}

export default {
  MyComponent: MyComponent,
  MyComponentDOM: MyComponentDOM,
};
