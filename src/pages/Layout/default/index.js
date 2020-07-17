import React from 'react';

import Header from '../../../components/Header';
import SideRightBar from '../../../components/SideRightBar';
import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <SideRightBar />
      <div className='app-container'>
        <Header />
        <div className='app-content'>{children}</div>
      </div>
    </Wrapper>
  );
}
