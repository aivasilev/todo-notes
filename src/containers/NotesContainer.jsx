import React, { useState } from 'react';
import { Notes } from '../components/Notes';
import { withRouter } from 'react-router-dom';
import { CurrentNoteContainer } from './CurrentNoteContainer';
import { getFromDB } from '../API';
import { NotLoggedIn } from '../components/NotLoggedIn';

const NotesContainer = ({ match, loggedInUser }) => {
  // State
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  // End of state

  // Functions
  const getNotesFromDB = () => {
    getFromDB('notes', { id: loggedInUser })
      .then((data) => {
        setNotes(
          data.map((note) => ({
            id: note.note_id,
            text: note.text,
            title: note.title,
          }))
        );
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setErrorMessage('Unable to fetch your notes from the server');
      });
  };
  // End of functions

  // Render
  return loggedInUser ? (
    match.params.id ? (
      <CurrentNoteContainer
        match={match}
        notes={notes}
        loggedInUser={loggedInUser}
        getNotesFromDB={getNotesFromDB}
      />
    ) : (
      <Notes
        notes={notes}
        getNotesFromDB={getNotesFromDB}
        isLoading={isLoading}
        errorMessage={errorMessage}
      />
    )
  ) : (
    <NotLoggedIn />
  );
};
// End of render

const NotesContainerWithRouter = withRouter(NotesContainer);
export { NotesContainerWithRouter };
