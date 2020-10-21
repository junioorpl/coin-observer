import styled, { css } from 'styled-components';

interface TitleProps {
  value: number;
}

export const Container = styled.li`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  min-height: 170px;
  max-height: 170px;
  padding: 32px;
  margin-top: 16px;

  background: #eee;
  border: 1px solid #ddd;
  border-radius: 10px;

  & + li {
    margin-top: 8px;
  }

  img {
    height: 64px;
    width: 64px;
  }

  strong {
    max-width: 130px;
    font-size: 32px;
  }

  div {
    display: flex;
    flex-direction: column;

    span {
      font-size: 16px;

      > strong {
        font-size: 22px;
      }
    }
  }

  button,
  a {
    display: flex;
    height: 48px;
    width: 48px;
    border: none;
    border-radius: 50%;
    transition: background 0.5s;

    color: #333;

    align-items: center;
    place-content: center;

    &:hover {
      color: #f28016;
    }

    svg {
      height: 32px;
      width: 32px;
    }
  }
`;

export const Change = styled.strong<TitleProps>`
  ${props =>
    props.value > 0
      ? css`
          color: #37c337;
        `
      : css`
          color: #ff0059;
        `}
`;
