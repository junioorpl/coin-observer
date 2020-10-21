import styled, { css } from 'styled-components';

interface IProps {
  value: number;
}

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 24px;

  background: #eee;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 16px;
`;

export const PercentageDiv = styled.div<IProps>`
  display: flex;
  flex-direction: column;

  place-content: center;
  align-items: center;

  font-size: 18px;
  strong {
    ${props =>
    props.value > 0
      ? css`
            color: #37c337;
          `
      : css`
            color: #ff0059;
          `}
  }
`;
