import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName: 'Parent'
        }
    }

    greetParent = (command) => {
        alert(`HEllo ${this.state.parentName} and ${command}`)
    }
    
    render() {
        return (
            <div>
                <Child greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default Parent
