import React, { useState } from 'react';
import { Todos } from '../components/Todos';
import { getFromDB, postToDB, deleteFromDB } from '../API';
import { NotLoggedIn } from '../components/NotLoggedIn';

const TodosContainer = ({ loggedInUser }) => {
  // State
  const [todos, setTodos] = useState([]);
  const [newTodoText, setNewTodoText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  // End of state

  // Functions
  const getTodosFromDb = () => {
    getFromDB('todos', { id: loggedInUser })
      .then((data) => {
        setTodos(
          data.map((todo) => ({
            done: todo.done === 0 ? false : true,
            text: todo.text,
            id: todo.todo_id,
          }))
        );
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setErrorMessage('Unable to fetch your tasks from the server');
      });
  };

  const toggleDone = (id) => {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        return postToDB('todos', {
          done: !todos[i].done,
          todo_id: todos[i].id,
          text: todos[i].text,
          uid: loggedInUser,
        }).then(getTodosFromDb);
      }
    }
  };

  const addTodo = () => {
    if (newTodoText !== '') {
      postToDB('todos', {
        done: false,
        todo_id: 'new',
        text: newTodoText,
        uid: loggedInUser,
      }).then(getTodosFromDb);
      setNewTodoText('');
    }
  };

  const removeTodo = (id) => {
    deleteFromDB('todos', { todo_id: id, uid: loggedInUser }).then(getTodosFromDb);
  };

  const handleNewTodoInputChange = (text) => {
    setNewTodoText(text);
  };

  const handleAddButtonPress = () => {
    addTodo();
  };

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const handleDeleteButtonPress = (id) => {
    removeTodo(id);
  };
  // End of functions

  // Render
  return loggedInUser ? (
    <Todos
      todos={todos}
      getTodosFromDb={getTodosFromDb}
      toggleDone={toggleDone}
      newTodoText={newTodoText}
      handleNewTodoInputChange={handleNewTodoInputChange}
      handleAddButtonPress={handleAddButtonPress}
      handleEnterPress={handleEnterPress}
      handleDeleteButtonPress={handleDeleteButtonPress}
      isLoading={isLoading}
      errorMessage={errorMessage}
    />
  ) : (
    <NotLoggedIn />
  );
};
// End of render

export { TodosContainer };
