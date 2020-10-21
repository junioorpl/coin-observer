import styled, { css } from 'styled-components';

interface IProps {
  isActive: boolean;
}

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;

  place-content: center;
  align-items: center;

  background: #eee;
  border: 1px solid #ddd;
  border-radius: 16px;

  min-height: 420px;
  max-height: 420px;

  > div {
    display: flex;
    width: 100%;
    padding: 32px;

    align-items: center;
  }
`;

export const Active = styled.div<IProps>`
  display: block;
  position: absolute;

  font-weight: bold;

  max-height: 32px;
  max-width: 96px;

  top: 0px;
  right: 0px;

  span {
    ${props =>
    props.isActive
      ? css`
            color: #37c337;
          `
      : css`
            color: #ff0059;
          `}
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;

  & + div {
    margin-left: 64px;
  }

  > div {
    display: flex;
    justify-content: space-between;

    align-items: baseline;
    margin-bottom: 16px;
    border-bottom: 1px solid #666;

    span {
      font-size: 18px;
      margin-right: 4px;
    }

    strong {
      font-size: 28px;
      text-transform: capitalize;
    }
  }
`;

export const DescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  max-width: 70%;

  top: 0;
  left: 0;

  div {
    font-size: 18px;
    width: 100%;
    text-align: left;
    margin-bottom: 4px;
  }

  p {
    max-height: 48px;
    overflow: auto;
  }

  span {
    font-size: 14px;
    margin-right: 4px;
  }
`;

export const LinksDiv = styled.div`
  display: flex;
  position: absolute;
  max-width: 70%;

  bottom: 0;
  left: 0;

  span {
    margin-right: 8px;
  }

  a {
    text-decoration: none;
    color: #333;
    margin-right: 12px;

    svg {
      width: 48px;
      height: 48px;
      transition: color 0.2s;

      &:hover {
        color: #f28016;
      }
    }
  }
`;

export const Timestamp = styled.div`
  display: block;
  position: absolute;
  max-width: 250px;

  bottom: 0;
  right: 0;

  span {
    margin-right: 4px;
  }
`;
