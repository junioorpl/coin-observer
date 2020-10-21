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
  padding: 0 20px;

  h1 {
    margin-top: 24px;
  }
`;

export const GlobalDataDiv = styled.div`
  margin-top: 8px;
`;

export const ObservedCoins = styled.ul`
  list-style-type: none;

  > div {
    display: block;
    flex: 1;

    flex-direction: column;

    min-height: 550px;
    max-height: 550px;
    overflow: auto;

    text-align: center;

    > span {
      font-size: 24px;
      color: #222;
      text-align: center;
      margin-bottom: 24px;
    }

    p {
      color: #444;
      font-size: 16px;

      svg {
        height: 16px;
        width: 16px;
      }
    }
  }
`;

export const Loading = styled.div`
  display: block;
  padding: 32px;

  text-align: center;

  span {
    font-size: 24px;
    color: #444;
  }

  svg {
    height: 32px;
    width: 32px;
    animation: ${loadingAnimation} 2.5s linear infinite;
  }
`;

export const MyCoinsDiv = styled.title`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  align-items: center;

  h1 {
    margin-top: 16px;
  }

  aside {
    font-size: 14px;
  }
`;
