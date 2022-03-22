import React, { Component } from "react";

class ClassComponent extends Component {
  state = {
    count: 0,
    timer: 0,
  };
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  componentDidMount() {
    // console.log("Mounting");
    setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  }

  componentDidUpdate() {
    // console.log("Updating");
    // return alert("Heyy there is an update");
  }

  componentWillUnmount() {
    // console.log("Destruction");

    return alert("Good bye");
  }
  render() {
    console.log("render");
    return (
      <div>
        <button onClick={this.increment}> + </button>

        <span> {this.state.count}</span>

        <button onClick={this.decrement}> - </button>

        <h1> {this.state.timer} </h1>
      </div>
    );
  }
}

export default ClassComponent;