import React, { Component } from "react";

export default class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
    };
  }

  doSomething = () => {
    alert("btn clicked");
    this.setState({
        name:'my'
    })
  };
  render() {
    return (
      <div>
        <h1>This is {this.state.name} app</h1>
        <button onClick={this.doSomething}>click me</button>
      </div>
    );
  }
}
