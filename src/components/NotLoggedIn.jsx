/** @jsx jsx */
import { jsx } from '@emotion/core';
import tw from 'twin.macro';
import { NavLink } from 'react-router-dom';

const NotLoggedIn = () => {
  return (
    <div css={tw`h-screen flex flex-col justify-center`}>
      <p css={tw`text-4xl text-center`}>You are not logged in</p>
      <p css={tw`text-3xl text-center`}>
        Please,{' '}
        <NavLink css={tw`text-green-500`} to='/'>
          return to ~
        </NavLink>
      </p>
    </div>
  );
};
export { NotLoggedIn };
