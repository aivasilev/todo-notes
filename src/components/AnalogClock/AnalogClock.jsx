/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState, useEffect, useRef } from 'react';
import { css } from 'twin.macro';
import bg from './clock.png';

// Style
const scale = 0.8;
const clock = css`
  width: ${350 * scale}px; //350
  height: ${350 * scale}px; //350
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${bg});
  background-size: cover;
  border: 4px solid #edf2f7;
  border-radius: 50%;
  box-shadow: 0 -15px 15px rgba(255, 255, 255, 0.05), inset 0 -15px 15px rgba(255, 255, 255, 0.05),
    0 15px 15px rgba(0, 0, 0, 0.03), inset 0 15px 15px rgba(0, 0, 0, 0.03);
  &:before {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    background: #000;
    border-radius: 50%;
    z-index: 20;
  }
  & .hour,
  & .min,
  & .sec {
    position: absolute;
  }
  & .hour,
  .hr {
    width: ${160 * scale}px; //160
    height: ${160 * scale}px; //160
  }
  & .min,
  .mn {
    width: ${190 * scale}px; //190
    height: ${190 * scale}px; //190
  }
  & .sec,
  .sc {
    width: ${230 * scale}px; //230
    height: ${230 * scale}px; //230
  }
  .hr,
  .mn,
  .sc {
    display: flex;
    justify-content: center;
    //   align-items: center;
    position: absolute;
    border-radius: 50px;
  }
  .hr:before {
    content: '';
    position: absolute;
    width: 8px;
    height: ${80 * scale}px; //80
    background: #48bb78;
    z-index: 8;
    border-radius: 6px 6px 0 0;
  }
  .mn:before {
    content: '';
    position: absolute;
    width: 4px;
    height: ${90 * scale}px; //90
    background: #000;
    z-index: 9;
    border-radius: 6px 6px 0 0;
  }
  .sc:before {
    content: '';
    position: absolute;
    width: 2px;
    height: ${150 * scale}px; //150
    background: #000;
    z-index: 10;
    border-radius: 6px 6px 0 0;
  }
`;
// Dan Abramov's custom hook
function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());
  useInterval(() => setTime(new Date()), 1000);

  const hh = time.getHours() * 30;
  const mm = time.getMinutes() * 6;
  const ss = time.getSeconds() * 6;

  const hst = css`
    transform: rotateZ(${hh + mm / 12}deg);
  `;
  const mst = css`
    transform: rotateZ(${mm}deg);
  `;
  const sst = css`
    transform: rotateZ(${ss}deg);
  `;
  return (
    <div css={clock}>
      <div className='hour'>
        <div css={hst} className='hr'></div>
      </div>
      <div className='min'>
        <div css={mst} className='mn'></div>
      </div>
      <div className='sec'>
        <div css={sst} className='sc'></div>
      </div>
    </div>
  );
};

export { AnalogClock };
