/** @jsx jsx */
import { jsx } from '@emotion/core';
import tw from 'twin.macro';
import { WhiteMenuBar, RedLink, MenuBarLinkGreen, MenuBarLinkGreenActive } from '../styles/Styles';
import { NavLink } from 'react-router-dom';
import { Clock } from './Clock';
const MenuBar = ({ handleLogout }) => {
  return (
    <nav css={WhiteMenuBar}>
      <Clock css={tw`px-4`} />
      <div css={tw`flex items-center`}>
        <NavLink exact activeStyle={MenuBarLinkGreenActive} css={MenuBarLinkGreen} to='/'>
          Home
        </NavLink>
        <NavLink activeStyle={MenuBarLinkGreenActive} css={MenuBarLinkGreen} to='/todos'>
          Todos
        </NavLink>
        <NavLink activeStyle={MenuBarLinkGreenActive} css={MenuBarLinkGreen} to='/notes'>
          Notes
        </NavLink>
      </div>
      <NavLink to='/' css={[RedLink, tw`px-4`]} onClick={handleLogout}>
        logout
      </NavLink>
    </nav>
  );
};

export { MenuBar };
