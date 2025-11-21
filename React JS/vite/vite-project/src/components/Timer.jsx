import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 0
    };

    this.timerId = null;
  }

  startTimer = () => {
    // Agar timer already chal raha hai to dobara start na ho
    if (this.timerId) return;  // agar nhi krnege toh 2 seconds ak gap aa ajyega
     

    this.timerId = setInterval(() => {
      this.setState((prevState) => ({
        time: prevState.time + 1
      }));
    }, 1000);
  };

  stopTimer = () => {
    clearInterval(this.timerId);
    this.timerId = null; // Reset ID
  };

  render() {
    return (
      <div>
        <h1>Time: {this.state.time} seconds</h1>

        <button onClick={this.startTimer}>Start</button>
        <button onClick={this.stopTimer}>Stop</button>
      </div>
    );
  }
}

export default Timer;
