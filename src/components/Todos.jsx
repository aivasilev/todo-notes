/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment, useEffect } from 'react';
import tw from 'twin.macro';
import {
  VerticalFlexWrapper,
  NewTodoInputField,
  TodoItem,
  TodoItemText,
  TodoItemTextDone,
  GreenButton,
  TodosCard,
  DeleteTodo,
  RedAlert,
} from '../styles/Styles';
import { LoadingSpinner } from './LoadingSpinner';

const Todos = ({
  todos,
  getTodosFromDb,
  toggleDone,
  newTodoText,
  handleNewTodoInputChange,
  handleAddButtonPress,
  handleEnterPress,
  handleDeleteButtonPress,
  isLoading,
  errorMessage,
}) => {
  useEffect(() => {
    getTodosFromDb();
  }, []);
  return (
    <div css={VerticalFlexWrapper}>
      {isLoading ? (
        <LoadingSpinner css={tw`mt-16 mx-auto`} />
      ) : errorMessage ? (
        <div css={[RedAlert, tw`mt-16`]}>{errorMessage}</div>
      ) : (
        <Fragment>
          <div css={tw`mt-8 flex flex-col md:flex-row`}>
            <input
              css={NewTodoInputField}
              onChange={(e) => handleNewTodoInputChange(e.target.value)}
              onKeyUp={(e) => handleEnterPress(e)}
              value={newTodoText}
              placeholder='Add new'
            />
            <button css={[GreenButton, tw`mt-4 mx-2 md:mt-0`]} onClick={handleAddButtonPress}>
              Add
            </button>
          </div>
          {/* TOTOTOTO */}
          {todos.length > 0 ? (
            <div css={[TodosCard, tw`m-4`]}>
              {todos.map((_) => (
                <div css={TodoItem} key={_.id}>
                  <div css={tw`flex items-center`}>
                    <input
                      checked={_.done}
                      type='checkbox'
                      onChange={() => {
                        toggleDone(_.id);
                      }}
                    />
                    <p
                      css={[_.done ? TodoItemTextDone : TodoItemText, tw`mx-2`]}
                      onClick={() => {
                        toggleDone(_.id);
                      }}
                    >{`${_.text}`}</p>
                  </div>
                  <button css={DeleteTodo} onClick={() => handleDeleteButtonPress(_.id)}>
                    Delete
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p css={tw`text-gray-700 m-4`}>You have no tasks yet</p>
          )}
        </Fragment>
      )}
    </div>
  );
};

export { Todos };
