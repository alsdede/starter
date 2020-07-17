import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: ${(props) => (props.openToogle ? '200px' : '80px')};
  transition: width 0.4s;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 70px;

  border-bottom: thin solid rgba(255, 255, 255, 0.1);

  button {
    background: none;
    border: 0;

    
    }
  }
`;
