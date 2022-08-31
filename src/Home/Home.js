import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import "./Home.css"
import Rain from '../Rain'
import MidAnimation from '../MidAnimation/MidAnimation'

function Home() {

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