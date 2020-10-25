import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getFromDB } from '../API';
import { MainMenu } from '../components/MainMenu';

const MainMenuContainer = ({ loggedInUser }) => {
  const [todosCount, setTodosCount] = useState('');
  useEffect(() => {
    getFromDB('todos/count', { id: loggedInUser }).then((resp) =>
      resp ? setTodosCount(resp.total) : null
    );
  });
  return <MainMenu todosCount={todosCount} />;
};

export { MainMenuContainer };
