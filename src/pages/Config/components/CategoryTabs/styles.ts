import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 320px;
  max-width: 320px;

  min-height: 600px;

  margin-top: 24px 0;
  padding-right: 4px;
  border-right: 1px solid #bbb;

  div {
    display: flex;
    align-items: center;
    padding: 12px;

    border-radius: 4px;

    transition: background 1s;

    &:hover {
      background: #ddd;
    }

    button {
      display: flex;
      align-items: center;
      width: 100%;

      border: none;

      background: transparent;
      color: #555;
      display: flex;
      height: 32px;
      font-size: 24px;
    }

    svg {
      height: 24px;
      width: 24px;
      margin-right: 16px;
    }
  }
`;
