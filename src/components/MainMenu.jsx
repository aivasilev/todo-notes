/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment } from 'react';
import { MainMenuCard, TodosCounter } from '../styles/Styles';
import tw from 'twin.macro';
import { NavLink } from 'react-router-dom';
import { AnalogClock } from './AnalogClock/AnalogClock';

const MainMenu = ({ todosCount }) => {
  return (
    <Fragment>
      <div css={tw`flex justify-center mt-12`}>
        <AnalogClock />
      </div>
      <div css={tw`flex flex-wrap justify-center items-center mt-4 w-full`}>
        <NavLink css={[MainMenuCard, tw`my-4 mx-8`]} to='/todos'>
          To-do
          {todosCount ? <div css={TodosCounter}>{`${todosCount}`}</div> : null}
        </NavLink>
        <NavLink css={[MainMenuCard, tw`my-4 mx-8`]} to='/notes'>
          Notes
        </NavLink>
      </div>
    </Fragment>
  );
};

export { MainMenu };
