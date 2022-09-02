import React, { useContext, useEffect } from 'react'
import "./Home.css"
import Rain from '../Rain'
import MidAnimation from '../MidAnimation/MidAnimation'
import { ContextWidth } from '../ProjectContext'


function Home() {

    const { setStateWidth } = useContext(ContextWidth)
    window.addEventListener("resize", () => {
        setStateWidth(window.innerWidth)
    })

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