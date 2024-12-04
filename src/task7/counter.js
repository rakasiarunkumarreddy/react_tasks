import React, { Component } from "react";
import "./counter.css"

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 2,
    };
  }

  handleEvent = (increment) => {
    this.setState((prevState) => ({
      counter: prevState.counter + increment,
    }));
  };

  render() {
    return (
      <div className="counter-container">
        <div className="counter-buttons">
          <button onClick={() => this.handleEvent(1)}>+1</button>
          <button onClick={() => this.handleEvent(-1)}>-1</button>
          <button onClick={() => this.handleEvent(2)}>+2</button>
        </div>
        <h1>{this.state.counter}</h1>
        <div className="counter-buttons">
          <button onClick={() => this.handleEvent(-2)}>-2</button>
          <button onClick={() => this.handleEvent(5)}>+5</button>
          <button onClick={() => this.handleEvent(-5)}>-5</button>
        </div>
        <h1>Task 7 Completed</h1>
        <hr style={{ border: "none", borderTop: "2px dotted #333", margin: "20px 0" }} />
      </div>
    );
  }
}

export default Counter;
