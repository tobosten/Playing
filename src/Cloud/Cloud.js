import React, { useContext, useState } from 'react'
import "./Cloud.css"
import styled from 'styled-components'
import { useInterval } from 'react-use';
import { ContextWidth } from '../ProjectContext';

function Rain2() {

    const [rainToRender, setRainToRender] = useState([{ offset: 0, key: 0, symbol: '' }]);

    useInterval(() => {
        if (rainToRender.length > 10) {
            rainToRender.shift();
        }

        const offset = Math.floor(Math.random() * 450);
        const key = offset + Math.random() * 1000000;
        const symbol = '|';
        /* ⭐ */
        rainToRender.push({ offset, key, symbol });

        setRainToRender([...rainToRender]);
    }, 100);

    return (
        <div className='superRainContainer'>
            {rainToRender.map(({ key, symbol, offset }) => {
                return (
                    <RainContainer key={key} offset={offset}>
                        {symbol}
                    </RainContainer>
                );
            })}
        </div>
    );

}


function Cloud() {

    return (
        <div className='superContainer'>
            <div>
                    <img src={require("../assets/angryCloud.png")}
                        className="cloudImage"
                    />

                <div className='rainDiv'>
                    <Rain2 />
                </div>
            </div>


            <div className='animContainer'>
                <div className='sun2'>

                </div>
            </div>

            <div className='animContainer'>
                <div className='planet'></div>
                <div className='rotatingPlanetContainer'>
                    <div className='rotatingPlanet'></div>

                    <div className='rotatingPlanet2'></div>
                </div>
            </div>
        </div>
    )
}

const RainContainer = styled.div`
    @keyframes rainAnim {
        0% {
            margin-top: 0;
            opacity: 1;
        }
        50% {
            opacity: 1;
        }
        100% {
            margin-top: 30vh;
            opacity: 0;
        }
    }

    position: absolute;
    left: ${props => props.offset}px;
    font-size: 40px;
    margin-left: 20px;
    color: lightgray;

    animation: rainAnim 3s ;
`;




export default Cloud