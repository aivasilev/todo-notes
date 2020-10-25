import React, { useState, useEffect } from 'react';
import './App.css';
import 'tailwindcss/dist/base.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { TodosContainer } from './containers/TodosContainer';
import { EntranceContainer } from './containers/EntranceContainer';
import { NotesContainerWithRouter } from './containers/NotesContainer';
import { MenuBar } from './components/MenuBar';
import { Fof } from './components/Fof';
import { MainMenuContainer } from './containers/MainMenuContainer';

const App = () => {
  // **************** State ****************
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState('');

  useEffect(() => {
    if (localStorage.length > 0) {
      setLoggedIn(true);
      setLoggedInUser(localStorage.getItem('uid'));
    }
  }, []);
  // ================ Functions ================
  const handleLogout = () => {
    setLoggedIn(false);
    setLoggedInUser('');
    localStorage.clear();
  };

  // ================ Render ================
  return (
    <BrowserRouter>
      <div className='App'>
        {loggedIn ? <MenuBar handleLogout={handleLogout} /> : null}
        <Switch>
          <Route exact path='/'>
            {loggedIn ? (
              <MainMenuContainer loggedInUser={loggedInUser} />
            ) : (
              <EntranceContainer setLoggedIn={setLoggedIn} setLoggedInUser={setLoggedInUser} />
            )}
          </Route>
          <Route exact path='/todos'>
            <TodosContainer loggedInUser={loggedInUser} />
          </Route>
          <Route exact path='/notes/:id?'>
            <NotesContainerWithRouter loggedInUser={loggedInUser} />
          </Route>
          <Route>
            <Fof />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default App;
