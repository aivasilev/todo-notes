import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Clock = (props) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(timer);
    };
  });

  const hh = time.getHours() < 10 ? `0${time.getHours()}` : `${time.getHours()}`;
  const mm = time.getMinutes() < 10 ? `0${time.getMinutes()}` : `${time.getMinutes()}`;
  return <div {...props}>{`${hh} : ${mm}`}</div>;
};

export { Clock };
