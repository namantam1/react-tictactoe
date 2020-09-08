import React, { Component } from 'react'

export default class Hello extends Component {
    doSomething = () => {
        alert("btn clicked")
    }
    render() {
        return (
            <div>
                <h1>This is my app</h1>
                <button onClick={this.doSomething}>click me</button>
            </div>
        )
    }
}
