import React from 'react';
import StringMask from 'string-mask';

import { Container, CapChange } from './styles';

interface IProps {
  data: IGlobalData;
}

interface IGlobalData {
  market_cap_usd: number;
  market_cap_ath_value: number;
  market_cap_change_24h: number;
  cryptocurrencies_number: number;
}

const GlobalData: React.FC<IProps> = ({ data }: IProps) => {
  const mask = new StringMask('#.##0,00', { reverse: true });
  const marketCap = mask.apply(data.market_cap_usd);
  const marketCapAth = mask.apply(data.market_cap_ath_value);

  return (
    <Container>
      <div>
        <span>USD Market Cap:</span>
        <strong>{`$ ${marketCap}`}</strong>
      </div>
      <div>
        <span>All-Time High Market Cap:</span>
        <strong>{`$ ${marketCapAth}`}</strong>
      </div>
      <div>
        <span>Market Cap 24-hour change:</span>
        <CapChange value={data.market_cap_change_24h}>
          {`${data.market_cap_change_24h}%`}
        </CapChange>
      </div>
      <div>
        <span>Current Cryptocurrencies:</span>
        <strong>{data.cryptocurrencies_number}</strong>
      </div>
    </Container>
  );
};

export default GlobalData;
