import './App.css';
import styled from 'styled-components';
import { useState, useContext } from 'react';
import { useInterval, useWindowSize } from 'react-use';
import { ContextWidth } from './ProjectContext';


function Rain() {
  const [rainToRender, setRainToRender] = useState([{ offset: 0, key: 0, emoji: '' }]);
  const { stateWidth, setStateWidth } = useContext(ContextWidth)

  useInterval(() => {
    if (rainToRender.length > 10) {
      rainToRender.shift();
    }


    const offset = Math.floor(Math.random() * stateWidth);
    const key = offset + Math.random() * 1000000;
    const emoji = '|';
    /* ⭐ */
    rainToRender.push({ offset, key, emoji });

    setRainToRender([...rainToRender]);
  }, 100);

  return (
    <div>
      {rainToRender.map(({ key, emoji, offset }) => {
        return (
          <EmojiContainer key={key} offset={offset}>
            {emoji}
          </EmojiContainer>
        );
      })}

    </div>
  );
}


const EmojiContainer = styled.div`
  @keyframes falldown {
    0% { margin-top: 0; opacity: 0.5}
    100% { margin-top: 80%; opacity: 0 }
  }
  
  position: absolute;
  top: -50px;
  left: ${props => props.offset}px;
  
  font-size: 48px;
  color: gray;
  animation: falldown 4s;
`;

export default Rain