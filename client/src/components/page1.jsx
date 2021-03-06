import React from 'react';
import {
  Login, Input, Button,
} from './styles/page1Stylings';
import Holder from './styles/holderStylings';
import Navi from './navi';

export default function Page1(props) {
  const { currentPage, changePage, onLogoClick } = props;
  return (
    <Holder page={currentPage}>
      <Navi onLogoClick={onLogoClick} />
      <Login>
          Email
        <Input />
          Password
        <Input type="password" />
        <Button onClick={() => changePage(event, 2)}>
            Log In!
        </Button>
      </Login>
    </Holder>
  );
}
