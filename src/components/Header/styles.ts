import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  align-items: center;

  max-width: 1158px;
  border-bottom: 1px solid rgba(20, 76, 76, 0.3);

  img {
    width: 520px;
  }

  div {
    padding: 16px;

    button {
      background: none;
      border: none;

      & + button {
        margin-left: 24px;
      }

      svg {
        color: #111;
        height: 32px;
        width: 32px;
      }
    }

    a {
      background: none;
      border: none;

      & + button {
        margin-left: 24px;
      }

      svg {
        color: #111;
        height: 32px;
        width: 32px;
      }
    }
  }
`;
