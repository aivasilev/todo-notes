/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment } from 'react';
import tw from 'twin.macro';
import {
  TopWrapper,
  FormWrapper,
  Label,
  InputField,
  GreenButton,
  RedAlert,
  GreenAlert,
} from '../styles/Styles';
import { LoadingSpinner } from './LoadingSpinner';

const Entrance = ({
  username,
  handleUnameInputChange,
  password,
  handlePwdInputChange,
  confirmPassword,
  handelConfPwdInputChange,
  handleLoginBtnPress,
  handleRegisterBtnPress,
  handleSwitchParagraphPress,
  handleEnterPress,
  isLoading,
  successMessage,
  errorMessage,
  registerMode,
}) => {
  return (
    <div css={FormWrapper}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div css={TopWrapper}>
          {errorMessage ? <p css={[RedAlert, tw`mb-2`]}>{errorMessage}</p> : null}
          {successMessage ? <p css={[GreenAlert, tw`mb-2`]}>{successMessage}</p> : null}
          <div>
            <label css={Label} htmlFor='username'>
              Username
            </label>
            <input
              css={[InputField, tw`mb-2`]}
              type='text'
              placeholder='username'
              value={username}
              onChange={handleUnameInputChange}
              onKeyUp={(e) => handleEnterPress(e)}
            />
          </div>
          <div>
            <label css={Label} htmlFor='password'>
              Password
            </label>
            <input
              css={[InputField, tw`mb-2`]}
              type='password'
              placeholder='password'
              value={password}
              onChange={handlePwdInputChange}
              onKeyUp={(e) => handleEnterPress(e)}
            />
          </div>
          {registerMode ? (
            <Fragment>
              <div>
                <label css={Label} htmlFor='password'>
                  Confirm Password
                </label>
                <input
                  css={[InputField, tw`mb-2`]}
                  type='password'
                  placeholder='confirm password'
                  value={confirmPassword}
                  onChange={handelConfPwdInputChange}
                  onKeyUp={(e) => handleEnterPress(e)}
                />
              </div>
              <button css={[GreenButton, tw`my-2`]} onClick={handleRegisterBtnPress}>
                Register
              </button>
              <p css={tw`text-gray-600 cursor-pointer`} onClick={handleSwitchParagraphPress}>
                Already registered?
              </p>
            </Fragment>
          ) : (
            <Fragment>
              <button css={[GreenButton, tw`my-2`]} onClick={handleLoginBtnPress}>
                Login
              </button>
              <p css={tw`text-gray-600 cursor-pointer`} onClick={handleSwitchParagraphPress}>
                Register
              </p>
            </Fragment>
          )}
        </div>
      )}
    </div>
  );
};

export { Entrance };
