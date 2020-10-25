/** @jsx jsx */
import { jsx } from '@emotion/core';
import tw from 'twin.macro';
import { NavLink } from 'react-router-dom';

const Fof = () => {
  return (
    <div css={tw`h-screen flex flex-col justify-center`}>
      <p css={tw`text-6xl text-center`}>404</p>
      <p css={tw`text-3xl text-center`}>
        Page not found.
        <br />
        Please{' '}
        <NavLink css={tw`text-green-500`} to='/'>
          return to ~
        </NavLink>
      </p>
    </div>
  );
};

export { Fof };
