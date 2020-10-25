/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment } from 'react';
import tw from 'twin.macro';
import TextareaAutosize from 'react-textarea-autosize';
import {
  VerticalFlexWrapper,
  NoteTitle,
  NoteTitleEditField,
  NoteCard,
  NoteTextarea,
  GreenButton,
  RedLink,
  SaveSuccessfulMessage,
} from '../styles/Styles';
import { LoadingSpinner } from './LoadingSpinner';

const CurrentNote = ({
  currentNote,
  handleTitleInputChange,
  handleTextboxChange,
  titleEditMode,
  toggleTitleEditMode,
  handleSaveButtonPress,
  handleOkButtonPress,
  handleDeleteButtonPress,
  isSaving,
  message,
}) => {
  return (
    <div css={VerticalFlexWrapper}>
      <div css={[NoteCard, tw`mt-8`]}>
        {titleEditMode ? (
          <div css={tw`flex items-center`}>
            <input
              css={NoteTitleEditField}
              value={currentNote.title}
              onChange={(e) => handleTitleInputChange(e.target.value)}
            />
            <button css={[GreenButton, tw`mx-2`]} onClick={handleOkButtonPress}>
              OK
            </button>
          </div>
        ) : (
          <h1 css={NoteTitle} onClick={toggleTitleEditMode}>
            {currentNote.title}
          </h1>
        )}
        <TextareaAutosize
          css={NoteTextarea}
          value={currentNote.text}
          onChange={(e) => {
            handleTextboxChange(e.target.value);
          }}
        />
      </div>

      {isSaving ? (
        <LoadingSpinner css={tw`mt-4`} scale={0.5} />
      ) : message ? (
        <div css={[SaveSuccessfulMessage, tw`mt-4`]}>{message}</div>
      ) : (
        <Fragment>
          {titleEditMode ? null : (
            <button css={[GreenButton, tw`mt-4`]} onClick={handleSaveButtonPress}>
              Save
            </button>
          )}
          <button css={[RedLink, tw`mt-2`]} onClick={handleDeleteButtonPress}>
            DELETE
          </button>
        </Fragment>
      )}
    </div>
  );
};

export { CurrentNote };
