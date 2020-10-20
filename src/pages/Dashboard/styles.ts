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

export const MainCoins = styled.div`
  margin-top: 24px;

  > div {
    padding: 0 8px;
    display: flex;
    flex-direction: row;
  }
`;

export const ObservedCoins = styled.ul`
  margin: 8px 0;
  list-style-type: none;

  > div {
    display: block;
    flex: 1;

    flex-direction: column;

    padding: 0 8px;
    max-height: 520px;
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
  display: flex;
  place-content: center;
  align-items: center;
  margin-top: 24px;

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

  aside {
    font-size: 14px;
  }
`;
