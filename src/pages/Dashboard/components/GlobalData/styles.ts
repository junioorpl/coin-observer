import styled, { css } from 'styled-components';

interface CapChangeProps {
  value: number;
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  padding: 0 8px;

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

  @media only screen and (max-width: 926px) {
    display: block;
    overflow: auto;
    max-height: 80px;
    text-align: center;
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
