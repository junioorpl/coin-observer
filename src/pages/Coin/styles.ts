import styled, { keyframes } from 'styled-components';

const loadingAnimation = keyframes`
  0%{ transform: rotate(-360deg);  }
  100%{ transform: rotate(0deg); }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1158px;
  margin: 0 auto;
`;

export const LoadingDiv = styled.div`
  display: flex;
  place-content: center;
  align-items: center;
  height: 320px;

  h1 {
    display: flex;
    font-size: 32px;
    text-align: center;
    margin-left: 16px;
  }

  svg {
    width: 32px;
    height: 32px;
    animation: ${loadingAnimation} 2.5s linear infinite;
  }
`;

export const CoinStats = styled.div`
  display: block;
  margin-top: 24px;
  padding: 0 8px;

  min-height: 720px;
  max-height: 720px;
  overflow: auto;

  title {
    display: flex;
    align-items: center;
    margin-bottom: 24px;

    justify-content: space-between;

    div {
      display: flex;
      align-items: center;

      margin: 0 32px;

      h1 {
        font-size: 48px;
        margin-left: 16px;
      }

      img {
        width: 48px;
        height: 48px;
      }

      span {
        font-size: 18px;
        margin-right: 4px;
      }

      strong {
        font-size: 32px;
      }
    }
  }

  h2 {
    margin-bottom: 12px;
  }
`;
