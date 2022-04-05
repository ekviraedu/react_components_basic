import React from "react";
import ReactDOM from "react-dom";

import FunctionExtComponent from "./func_ext_component";
import ClassExtComponent from "./class_ext_component";

function MyFirstFunctionComponent() {
  return <h2>My First Function Component</h2>;
}

class MyFirstClassComponent extends React.Component {
  render() {
    return <h2>My First Class Component</h2>;
  }
}

function InnerFunctionComponent() {
  return <h2>This is Inner Function Component</h2>;
}

function OuterFunctionComponent() {
  return (
    <>
      <h1>This is Outer Function Component</h1>
      <InnerFunctionComponent />
    </>
  );
}

ReactDOM.render(<ClassExtComponent />, document.getElementById("root"));
