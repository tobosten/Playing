import React from 'react'
import "aos/dist/aos.css"
import "./MidAnimation.css"
import styled from 'styled-components'
import Ufo from "../assets/ufo.png"

function MidAnimation() {

    return (
        <div className='hej'>
            <AnimationContainer>
                <img
                    src={Ufo}
                    alt={""}
                    style={{ height: 250, width: 250 }}
                />
            </AnimationContainer>
            <div className='sunContainer'>
                <HeatAnimation1></HeatAnimation1>
                <div className='sun'></div>
            </div>

            <ShootingStar>
                <div className='star'></div>
            </ShootingStar>
        </div >
    )
}


const ShootingStar = styled.div`
    
    position: absolute;
    margin-left: 95%;

    @keyframes shootingStar {
        0% {
          margin-left: 95%;
          margin-bottom: 20%;
          opacity: 0
        }
        25% {
            opacity: 1;
        }

        50% {
            opacity: 1;
        }

        100% {
            margin-left: 0%;
            margin-bottom: -20%;
            opacity: 0;
        }
    }

    animation: shootingStar 6s infinite;
`;


const HeatAnimation1 = styled.div`
    /* border: 1px solid yellow; */
    border-radius: 500px;
    position: absolute;
    height: 160px;
    width: 160px;
    box-shadow: 0px 0px 20px yellow;

    @keyframes heat1 {
        0% { 
            opacity: 0;
        }
        50% { 
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    animation: heat1 5s infinite;
`;


const AnimationContainer = styled.div`
    color: white;
    position: absolute;

    @keyframes goRight {
        0% {
            margin-left: 0;
            opacity: 0; 
            transform: rotate(40deg);
        }
        25% { 
            transform: scaleX(1);
            opacity: 1;
        }
        50% {
            margin-left: 50%;
            margin-top: 0;
            opacity: 1;

        }
        100% {
            margin-left: 0;
            margin-top: 15%;
            opacity: 0;
        }
    }
    animation: goRight 6s infinite;
`;





export default MidAnimation