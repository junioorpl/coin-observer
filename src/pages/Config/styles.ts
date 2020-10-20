import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1158px;
  margin: 0 auto;

  h1 {
    margin-top: 24px;
  }
`;

export const SettingsDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 24px;

  min-height: 600px;
  max-height: 600px;
`;

export const CategoryDiv = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 320px;
  max-width: 320px;

  min-height: 600px;

  margin-top: 24px 0;
  padding-right: 4px;
  border-right: 1px solid #bbb;

  div {
    display: flex;
    align-items: center;
    padding: 12px;

    border-radius: 4px;

    transition: background 1s;

    &:hover {
      background: #ddd;
    }

    button {
      display: flex;
      align-items: center;
      width: 100%;

      border: none;

      background: transparent;
      color: #555;
      display: flex;
      height: 32px;
      font-size: 24px;
    }

    svg {
      height: 24px;
      width: 24px;
      margin-right: 16px;
    }
  }
`;

export const OptionsDiv = styled.div`
  padding: 12px 24px;

  display: flex;
  flex-direction: column;

  h2 {
    font-size: 32px;
    margin-bottom: 12px;
  }

  label {
    font-size: 18px;
    margin-top: 8px;

    input {
      margin-right: 4px;
    }
  }

  select {
    margin-top: 4px;
    color: #222;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    padding: 8px;
  }

  p {
    font-size: 18px;
  }

  button {
    margin-top: 24px;
    padding: 8px;
    font-size: 24px;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    color: #fff;
    background: #f31000;
  }
`;
