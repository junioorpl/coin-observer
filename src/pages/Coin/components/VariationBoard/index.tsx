import React from 'react';

import { Container, PercentageDiv } from './styles';

interface IProps {
  quotes: {
    USD: {
      price: number;
      percent_change_15m: number;
      percent_change_30m: number;
      percent_change_1h: number;
      percent_change_6h: number;
      percent_change_12h: number;
      percent_change_24h: number;
      ath_price: number;
      ath_date: string;
    };
  };
}

const VariationBoard: React.FC<IProps> = ({ quotes }: IProps) => {
  return (
    <Container>
      <PercentageDiv value={quotes.USD.percent_change_15m}>
        <span>15m:</span>
        <strong>{`${quotes.USD.percent_change_15m}%`}</strong>
      </PercentageDiv>
      <PercentageDiv value={quotes.USD.percent_change_30m}>
        <span>30m:</span>
        <strong>{`${quotes.USD.percent_change_30m}%`}</strong>
      </PercentageDiv>
      <PercentageDiv value={quotes.USD.percent_change_1h}>
        <span>1h:</span>
        <strong>{`${quotes.USD.percent_change_1h}%`}</strong>
      </PercentageDiv>
      <PercentageDiv value={quotes.USD.percent_change_6h}>
        <span>6h:</span>
        <strong>{`${quotes.USD.percent_change_6h}%`}</strong>
      </PercentageDiv>
      <PercentageDiv value={quotes.USD.percent_change_12h}>
        <span>12h:</span>
        <strong>{`${quotes.USD.percent_change_12h}%`}</strong>
      </PercentageDiv>
      <PercentageDiv value={quotes.USD.percent_change_24h}>
        <span>24h:</span>
        <strong>{`${quotes.USD.percent_change_24h}%`}</strong>
      </PercentageDiv>
    </Container>
  );
};

export default VariationBoard;
