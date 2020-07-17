import React, { useState } from 'react';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import { Container, LogoContainer } from './styles';

const SideRightBar = () => {
  const [openToogle, setOpenToogle] = useState(true);

  const handleOpenToogle = () => {
    setOpenToogle(!openToogle);
    console.log(openToogle);
  };
  return (
    <Container openToogle={openToogle}>
      <LogoContainer>
        <button onClick={handleOpenToogle}>
          {openToogle ? (
            <MdArrowBack size={30} color='#fff' />
          ) : (
            <MdArrowForward size={30} color='#fff' />
          )}
        </button>
      </LogoContainer>
    </Container>
  );
};

export default SideRightBar;
