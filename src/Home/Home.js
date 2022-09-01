import React, { useContext } from 'react'
import "./Home.css"
import Rain from '../Rain'
import MidAnimation from '../MidAnimation/MidAnimation'
import { ContextWidth } from '../ProjectContext'

function Home() {

    /* console.log(window.innerWidth); */
    let width = window.innerWidth
    const { stateWidth, setStateWidth } = useContext(ContextWidth)
    console.log("Width:", width);
    setStateWidth(width)

    return (
        <div className='mainContainerHome'>
            <div className='topContainerHome'>
                <div style={{ fontSize: 40, fontWeight: "500", color: "white" }}>
                    RAIN!
                </div>
                <Rain />
            </div>
            <div className='midContainerHome'>
                <MidAnimation />
            </div>
            <div className='botContainerHome'>

            </div>
        </div>
    )
}

export default Home