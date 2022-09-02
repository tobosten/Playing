import React from 'react'
import "./Test.css"
import SpaceImg from "../assets/space.jpg"

function Test() {
    return (
        <div className='testContainer'>
            <div className='animationContainer'>
                <div className='rightBlocker'> </div>

                <div className='animationDiv1'></div>

                <div className='animationDiv2'></div>

                <div className='animationDiv3'></div>

                <div className='leftBlocker'></div>
            </div>
        </div>
    )
}

export default Test