import styled, { css } from 'styled-components';

interface CapChangeProps {
  value: number;
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;

  background: #eee;
  border: 1px solid #ddd;
  border-radius: 8px;

  div {
    display: flex;
    flex-direction: column;
    padding: 16px 4px;

    span {
      font-size: 18px;
    }

    strong {
      font-size: 24px;
    }
  }
`;

export const CapChange = styled.strong<CapChangeProps>`
  ${props =>
    props.value > 0
      ? css`
          color: #37c337;
        `
      : css`
          color: #ff0059;
        `}
`;
