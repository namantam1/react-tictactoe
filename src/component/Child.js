import React from 'react'

export default function Child(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('this is child')}>click me</button>
        </div>
    )
}
