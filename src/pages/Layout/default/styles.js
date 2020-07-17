import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: row;

  .app-container {
    display: flex;
    flex: 1;
    flex-direction: column;

    width: calc(100% - 200px);
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  .app-content {
    display: flex;
    background-color: rgba(255, 255, 255, 0.8);
    flex: 1;
    padding: 20px;
    border-bottom-left-radius: 20px;
  }
`;
