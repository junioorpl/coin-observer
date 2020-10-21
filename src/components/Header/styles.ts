import styled, { keyframes } from 'styled-components';

const pulseAnimation = keyframes`
    0% {
        transform: scale(0.95);
        border-radius: 50%;
        box-shadow: 0 0 0 0 rgba(255, 121, 63, 0.7);
    }

    70% {
        transform: scale(1);
        border-radius: 50%;
        box-shadow: 0 0 0 10px rgba(255, 121, 63, 0);
    }

    100% {
        transform: scale(0.95);
        border-radius: 50%;
        box-shadow: 0 0 0 0 rgba(255, 121, 63, 0);
    }`;
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
        transform: scale(1);

        :active {
          animation: ${pulseAnimation} 0.2s normal;
        }
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
