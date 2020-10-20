import styled, { keyframes } from 'styled-components';

const loadingAnimation = keyframes`
  0%{ transform: rotate(-360deg);  }
  100%{ transform: rotate(0deg); }
`;

export const Container = styled.div`
  display: flex;
  position: absolute;

  align-items: center;
  place-content: center;

  background-color: rgba(0, 0, 0, 0.2);

  height: 100vh;
  width: 100vw;

  > button {
    background: transparent;
    height: 100vh;
    width: 100vw;
  }

  > div {
    display: flex;
    position: absolute;
    flex-direction: column;
    padding: 16px;

    border: 1px solid #ddd;
    border-radius: 16px;

    background: #fff;
    width: 720px;
    min-height: 520px;
    max-height: 520px;

    h2 {
      padding: 8px;
      border-bottom: 1px solid rgba(20, 76, 76, 0.3);
      margin-bottom: 8px;
    }

    span {
      text-align: center;
      margin-top: 25px;
      font-size: 20px;
      font-weight: bold;
    }

    input {
      font-size: 18px;
      height: 32px;
      padding: 16px;
      margin-bottom: 16px;
      color: #000;
      background: #ffffff;
      border: 1px solid #ddd;
      border-radius: 8px;
    }

    div {
      display: flex;
      flex-direction: column;
      padding: 0 8px;

      overflow: auto;

      button {
        font-size: 16px;
        font-weight: bold;
        color: #111;
        padding: 16px;
        border: 1px solid #ddd;
        border-radius: 4px;

        & + button {
          margin-top: 8px;
        }
      }
    }
  }
`;

export const LoadingDiv = styled.div`
  align-items: center;

  h3 {
    display: flex;
    font-size: 18px;
    align-items: center;

    svg {
      width: 20px;
      height: 20px;
      animation: ${loadingAnimation} 2.5s linear infinite;
    }
  }
`;
