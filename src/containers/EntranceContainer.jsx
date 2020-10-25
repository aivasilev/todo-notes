import React, { useState } from 'react';
import { Entrance } from '../components/Entrance';
import { postToDB } from '../API';

const EntranceContainer = ({ setLoggedIn, setLoggedInUser }) => {
  // State
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [registerMode, setRegisterMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // End of state

  // Functions
  const login = () => {
    setIsLoading(true);
    if (username && password) {
      postToDB('login', { login: username, pass: password })
        .then((res) => {
          if (res.data.code === 0) {
            setLoggedIn(true);
            setLoggedInUser(res.data.id);
            localStorage.setItem('uid', res.data.id);
          } else if (res.data.code === 1) {
            setIsLoading(false);
            setErrorMessage('Wrong username or password');
          } else {
            setIsLoading(false);
            setErrorMessage('Something is wrong with the server');
          }
        })
        .catch(() => {
          setIsLoading(false);
          setErrorMessage('No connection with the server');
        });
      return;
    }
    setIsLoading(false);
    setErrorMessage('Please fill in username and password');
  };
  const register = () => {
    if (password === confirmPassword) {
      setIsLoading(true);
      return postToDB('register', { login: username, pass: password }).then((resp) => {
        setIsLoading(false);
        if (resp.data.code === 0) {
          setRegisterMode(false);
          setUsername('');
          setPassword('');
          setSuccessMessage('Registration successful. You can now log in.');
          setTimeout(() => setSuccessMessage(''), 3000);
        } else {
          setErrorMessage('Unable to register');
          setTimeout(() => setErrorMessage(''), 3000);
        }
      });
    }
    setErrorMessage('Passwords do not match');
    setTimeout(() => setErrorMessage(''), 3000);
  };
  const handleUnameInputChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePwdInputChange = (e) => {
    setPassword(e.target.value);
  };
  const handelConfPwdInputChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleLoginBtnPress = () => {
    login();
  };
  const handleRegisterBtnPress = () => {
    register();
  };
  const handleSwitchParagraphPress = () => {
    setRegisterMode((prev) => !prev);
    setUsername('');
    setPassword('');
    setConfirmPassword('');
    setSuccessMessage('');
    setErrorMessage('');
  };
  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      registerMode ? register() : login();
    }
  };
  // End of functions

  // Render
  return (
    <Entrance
      username={username}
      handleUnameInputChange={handleUnameInputChange}
      password={password}
      handlePwdInputChange={handlePwdInputChange}
      confirmPassword={confirmPassword}
      handelConfPwdInputChange={handelConfPwdInputChange}
      handleLoginBtnPress={handleLoginBtnPress}
      handleRegisterBtnPress={handleRegisterBtnPress}
      handleSwitchParagraphPress={handleSwitchParagraphPress}
      handleEnterPress={handleEnterPress}
      isLoading={isLoading}
      successMessage={successMessage}
      errorMessage={errorMessage}
      registerMode={registerMode}
    />
  );
  // End of render
};

export { EntranceContainer };
