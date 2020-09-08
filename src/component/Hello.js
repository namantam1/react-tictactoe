import React, { Component } from 'react'

export default class Hello extends Component {
    doSomething = () => {
        alert("btn clicked")
    }
    render() {
        return (
            <div>
                <button onClick={this.doSomething}>click me</button>
            </div>
        )
    }
}
