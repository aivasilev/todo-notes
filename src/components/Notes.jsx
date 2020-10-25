/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useEffect } from 'react';
import tw from 'twin.macro';
import { VerticalFlexWrapper, NoteThumbnail, AddNoteButton, RedAlert } from '../styles/Styles';
import { NavLink } from 'react-router-dom';
import { LoadingSpinner } from './LoadingSpinner';

const Notes = ({ notes, getNotesFromDB, isLoading, errorMessage }) => {
  useEffect(() => {
    getNotesFromDB();
  }, []);
  return (
    <div css={VerticalFlexWrapper}>
      {isLoading ? (
        <LoadingSpinner css={tw`mt-16`} />
      ) : errorMessage ? (
        <div css={[RedAlert, tw`mt-16`]}>{errorMessage}</div>
      ) : (
        <div css={[tw`m-8 grid grid-cols-notes gap-4 container`, 'justify-items: center;']}>
          {notes.map((note) => (
            <NavLink css={[NoteThumbnail]} to={`/notes/${note.id}`} key={note.id}>
              {note.title}
            </NavLink>
          ))}
          <NavLink css={[AddNoteButton]} to='/notes/new'>
            Add note
          </NavLink>
        </div>
      )}
    </div>
  );
};

export { Notes };
