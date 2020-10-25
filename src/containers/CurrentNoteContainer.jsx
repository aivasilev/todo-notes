import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { CurrentNote } from '../components/CurrentNote';
import { postToDB, deleteFromDB } from '../API';

const CurrentNoteContainer = ({ match, notes, loggedInUser, getNotesFromDB }) => {
  // State
  const [currentNote, setCurrentNote] = useState({
    title: 'New Note',
    text: '',
    id: 'new',
  });
  const [titleEditMode, setTitleEditMode] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState('');
  const history = useHistory();
  // End of state

  // Hooks
  useEffect(() => {
    for (let i = 0; i < notes.length; i++) {
      if (notes[i].id === match.params.id) {
        setCurrentNote(() => ({
          title: notes[i].title,
          text: notes[i].text,
          id: notes[i].id,
        }));
        return;
      }
    }
  }, [notes, match.params.id]);
  // End of hooks

  // Functions
  // API requests
  const saveCurrentNoteToDB = () => {
    postToDB('notes', {
      note_id: currentNote.id,
      title: currentNote.title,
      text: currentNote.text,
      uid: loggedInUser,
    })
      .then((resp) => {
        if (currentNote.id === 'new') {
          console.log(resp.data.note_id);
          setCurrentNote((prev) => ({ ...prev, id: resp.data.note_id }));
        }
        setIsSaving(false);
        resp && resp.status === 200 ? setMessage('Saved') : setMessage('Error');
        setTimeout(() => setMessage(''), 3000);
        getNotesFromDB();
      })
      .catch(console.log);
  };

  const deleteCurrentNoteFromDB = async () => {
    await deleteFromDB('notes', {
      note_id: currentNote.id,
      uid: loggedInUser,
    });
    getNotesFromDB();
  };
  //End of API requests

  const toggleTitleEditMode = () => {
    setTitleEditMode((prev) => !prev);
  };

  const handleTitleInputChange = (text) => {
    setCurrentNote((prev) => ({
      ...prev,
      title: text,
    }));
  };

  const handleTextboxChange = (text) => {
    setCurrentNote((prev) => ({
      ...prev,
      text: text,
    }));
  };

  const handleSaveButtonPress = () => {
    setIsSaving(true);
    saveCurrentNoteToDB();
  };

  const handleOkButtonPress = () => {
    setIsSaving(true);
    saveCurrentNoteToDB();
    toggleTitleEditMode();
  };

  const handleDeleteButtonPress = () => {
    deleteCurrentNoteFromDB();
    history.push('/notes');
  };
  //End of functions

  // Render
  return (
    <CurrentNote
      currentNote={currentNote}
      titleEditMode={titleEditMode}
      handleTitleInputChange={handleTitleInputChange}
      handleTextboxChange={handleTextboxChange}
      toggleTitleEditMode={toggleTitleEditMode}
      handleSaveButtonPress={handleSaveButtonPress}
      handleOkButtonPress={handleOkButtonPress}
      handleDeleteButtonPress={handleDeleteButtonPress}
      isSaving={isSaving}
      message={message}
    />
  );
  // End of render
};

export { CurrentNoteContainer };
